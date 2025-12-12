import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase";
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const roomCollection = collection(db, "rooms");
                const snapshot = await getDocs(roomCollection);
                const rooms = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                const room = rooms.find(room => room.id === id)
                room && setRoom(room)
                room && setMainImage(room.images[0])
            } catch (error) {
                console.error("Error loading room:", error);
            }
        };
        fetchRooms();
    }, [id]); //id is the dependancy

    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room Details */}
            <div>
                <h1>{room.hotel.name}</h1>
            </div>
        </div>
    )
}

export default RoomDetails