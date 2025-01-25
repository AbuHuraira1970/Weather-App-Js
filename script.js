async function Weather(City) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${City}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6202d47398msh2760f35afff4181p1a4992jsn92831edec967',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        // document.getElementById("cloud_pct").innerHTML = result.cloud_pct
        document.getElementById("feels_like").innerHTML = result.feels_like
        document.getElementById("humidity").innerHTML = result.humidity
        document.getElementById("humidity1").innerHTML = result.humidity
        document.getElementById("max_temp").innerHTML = result.max_temp
        document.getElementById("min_temp").innerHTML = result.min_temp
        document.getElementById("sunrise").innerHTML = result.sunrise
        document.getElementById("sunset").innerHTML = result.sunset
        document.getElementById("temp").innerHTML = result.temp
        document.getElementById("temp1").innerHTML = result.temp
        document.getElementById("wind_degrees").innerHTML = result.wind_degrees
        document.getElementById("wind_speed").innerHTML = result.wind_speed
        document.getElementById("wind_speed1").innerHTML = result.wind_speed
        document.getElementById("heading").innerHTML = "Weather For " + City
        // console.log(cloud_pct,temp,feels_like,humidity,min_temp,max_temp,wind_speed,wind_degrees,sunrise,sunset)
    }
    catch (error) {
        console.error(error);
    }
}

let city = document.getElementById("city")
 document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault()
    Weather(city.value)
})

Weather("Lahore")

