import { getCurrentWeather } from "./services/api";
import {useState} from "./services/api";
import {WeatherData} from "./types/server";

interface City {
    id: number, 
    name: string, 
    lat:string, 
    lon:string
}

const cities = [
    {id:1, name:'tehran', lat:"35.7219", lon:"51.3347"},
    {id:2, name:'Ahvaz', lat:"31.3183", lon:"48.6706"},
    {id:3, name:'Yazd', lat:"31.8974", lon:"54.3569"}
];

function App() {
    const [weatherData, setWeatherData] = useState<WeatherData>()


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        // console.log(JSON.parse(value));
        const selectedLocation = JSON.parse(value)

        getCurrentWeather({lat: selectedLocation.lat , lon:selectedLocation.lon}).then(res=>{
            // console.log(res);
            setWeatherData(res)
        })
    };

    return(
        <>
        <h1>Weather App</h1>
        <h3>pressure: {weatherData?.main.pressure}</h3>
        <select onChange={handleChange}>
            {
                cities.map(item =>(
                    <option key={item.id} value={JSON.stringify(item)}>
                        {item.name}
                    </option>
                ))
            }
        </select>
        </>
    );
}

export default App;