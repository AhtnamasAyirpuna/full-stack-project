import { useEffect, useState } from 'react'
import Title from '../components/Title'
import { collection, getDocs, getDoc } from "firebase/firestore"
import { db } from "../firebase";
import { assets } from '../assets';


const MyBookings = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const bookingSnap = await getDocs(collection(db, bookings));

                const bookingWithRooms = await Promise.all(
                    bookingSnap.docs.map(async (doc) => {
                        const bookingData = doc.data()
                        const roomSnap = await getDoc(bookingData.room)
                        const roomData = roomSnap.exists() ? roomSnap.data() : null

                        return {
                            id: doc.id,
                            ...bookingData,
                            room: roomData
                        }
                    })
                )

                setBookings(bookingWithRooms);

            } catch (error) {
                console.error("Error loading bboking:", error);
            }
        }
        fetchBooking()
    },);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='My Bookings' subTitle='Easily manage your past, current and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.' align='left' />

            <div className='max-w-5xl mt-8 w-full text-gray-800'>

                <div className='hidden md:grid md:grid-cols-[3fr_2fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Date & Timings</div>
                </div>

                {bookings.map((booking) => (
                    <div key={booking.id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr] w-full border-b border-gray-300 py-6 first:border-t'>
                        {/* Hotel Details */}
                        <div className='flex flex-col md:flex-row'>
                            <img src={booking.room.images} alt="hotel-img" className='min-md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                                <p className='font-playfair text-2xl'>{booking.room.name}</p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.location} alt="location-icon" />
                                    <span>{booking.room.address}</span>
                                </div>
                            </div>
                        </div>
                        {/* Date and Timing */}
                        <div></div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MyBookings