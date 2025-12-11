import HotelCard from './HotelCard'
import Title from './Title'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            const roomCollection = collection(db, "rooms");
            const snapshot = await getDocs(roomCollection);

            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setRooms(data);
        };

        fetchRooms();
    }, []);

    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title title='Featured Destination' subTitle='Experience our exclusive picks of stunning stays crafted for luxury and lasting impressions.' />
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {rooms.map((room, index) => (
                    <HotelCard key={room.id} room={room} index={index} />
                ))}
            </div>
            <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
                View All Destinations
            </button>
        </div>
    )
}

export default FeaturedDestination