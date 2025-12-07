import logo from './logo.svg';
import search from './search.svg';
import menu from './menu.svg';
import close from './close.svg';
import star from './star.svg';
import location from './location.svg';
import calendar from './calendar.svg';
import roomImg1 from './roomImg1.png';
import roomImg2 from './roomImg2.png';
import roomImg3 from './roomImg3.png';
import roomImg4 from './roomImg4.png';

export const assets = {
    logo,
    search,
    menu,
    close,
    calendar,
    star,
    location,
};

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": {
            "name": "Hotel One"
        },
        "pricePerNight": 120,
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "address": "hotel name, hotel street, hotel road, 52000, hotel",
    },
    {
        "_id": "67f7647c197ac559e4089b97",
        "hotel": {
            "name": "Hotel Two"
        },
        "pricePerNight": 130,
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "address": "hotel name, hotel street, hotel road, 52000, hotel",
    },
    {
        "_id": "67f7647c197ac559e4089b98",
        "hotel": {
            "name": "Hotel Three"
        },
        "pricePerNight": 130,
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "address": "hotel name, hotel street, hotel road, 52000, hotel",
    },
    {
        "_id": "67f7647c197ac559e4089b99",
        "hotel": {
            "name": "Hotel Four"
        },
        "pricePerNight": 120,
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "address": "hotel name, hotel street, hotel road, 52000, hotel",
    },
]
