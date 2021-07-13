import sunny from '../assets/sunny.svg'
import sunnyRain from '../assets/sunny-rain.svg'
import rain from '../assets/rain.svg'
import cloudy from '../assets/cloudy.svg'

const weatherInfo = [
    {
        id: 1,
        weekDey: "Monday",
        imgURL: sunny,
        temp: "36C"
    },
    {
        id: 2,
        weekDey: "Tuesday",
        imgURL: cloudy,
        temp: "32C"
    },
    {
        id: 3,
        weekDey: "Wednesday",
        imgURL: rain,
        temp: "35C"
    },
    {
        id: 4,
        weekDey: "Thursday",
        imgURL: rain,
        temp: "45C"
    },
    {
        id: 5,
        weekDey: "Friday",
        imgURL: sunnyRain,
        temp: "36C"
    },
    {
        id: 6,
        weekDey: "Saturday",
        imgURL: sunny,
        temp: "37C"
    },
    {
        id: 7,
        weekDey: "Sunday",
        imgURL: cloudy,
        temp: "39C"
    }
]

export default weatherInfo