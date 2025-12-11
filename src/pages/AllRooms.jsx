import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase";
import { useEffect, useState } from 'react'
import { assets } from '../assets';

const AllRooms = () => {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const roomCollection = collection(db, "rooms");
                const snapshot = await getDocs(roomCollection);

                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRooms(data);
            } catch (error) {
                console.error("Error loading rooms:", error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Find the room that fits your style and create lasting memories.</p>
                </div>

                {rooms.map((room) => (
                    <div>
                        <img onClick={() => { navigate(`/rooms/${room.id}`); scrollTo(0, 0) }}
                            src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
                        <div className='md:w-1/2 flex flex-col gap-2'>
                            <p className='text-gray-500'>{room.hotel.city}</p>
                            <p onClick={() => { navigate(`/rooms/${room.id}`); scrollTo(0, 0) }} className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                            <div className='flex items-center'>
                                <p className='ml-2'>200+ reviews</p>
                            </div>
                            <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                                <img src={assets.location} alt="location-icon" className='h-4' />
                                <span>{room.address}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Filter */}
            <div>

            </div>
        </div>
    )
}

export default AllRooms