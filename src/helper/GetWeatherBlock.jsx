import weatherInfo from "../data/weather.data";
import Weather from "../components/Weather/Weather";

const GetWeatherBlock = weatherInfo.map(el => {
    return <Weather weekDey={el.weekDey} imgURL={el.imgURL} temp={el.temp} />
})

export default GetWeatherBlock