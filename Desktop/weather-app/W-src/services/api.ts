import axios from "axios";


const APIkey = "e5708825d6307522e630e73e6aa265aa"

const client = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export async function getCurrentWeather({lat, lon}:{lat:string, lon:string}){
   const {data} = await client(`/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)

   return data
}

