import React, { useState } from "react";
import './Weather.css';
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import humidity from "../../assets/humidity.png";
import rain from "../../assets/rain.png";
import search from "../../assets/search.png";
import snow from "../../assets/snow.png";
import clear from "../../assets/clear.png";
import wind from "../../assets/wind.png";
function Weather(){
    let api_key="ae9ae05987c3ac0fade68aca67c28c96";
    const [icon ,seticon]=useState(cloud);
const searchs=async()=>{
    const element=document.getElementsByClassName("cityinput");
    if(element[0].value===""){
        return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let respone=await fetch(url);
    let data= await respone.json();
    let humidity=document.getElementsByClassName("humidity-percent");
    let wind=document.getElementsByClassName("wind-speed");
    let weathertemp=document.getElementsByClassName("weather-temp");
    let location=document.getElementsByClassName("weather-location");
    humidity[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML=Math.floor(data.wind.speed)+" km/hr";
    weathertemp[0].innerHTML=Math.floor(data.main.temp)+"°c";
    location[0].innerHTML=data.name;
    if(data.weather.icon==="01d"||data.weather.icon=="01n"){
        seticon(clear);
    }else if(data.weather.icon==="02d"||data.weather.icon=="02n"){
        seticon(cloud);
    }else if(data.weather.icon==="03d"||data.weather.icon=="03n"){
        seticon(drizzle);
    }else if(data.weather.icon==="04d"||data.weather.icon=="04n"){
        seticon(drizzle);
    }else if(data.weather.icon==="09d"||data.weather.icon=="09n"){
        seticon(rain);
    }else if(data.weather.icon==="10d"||data.weather.icon=="10n"){
        seticon(rain);
    }else if(data.weather.icon==="13d"||data.weather.icon=="13n"){
        seticon(snow);
    }else{
        seticon(clear);
    }
    
}
    return(
        <div className="container">
<div className="topbar">
    <input type="text" placeholder="Search" className="cityinput" ></input>
    <div className="searchicon" onClick={()=>searchs()} >
        <img src={search}   alt="search"/>
    </div>
</div>
<div className="weather-image">
    <img src={icon} alt="img"/>
</div>
<div className="weather-temp"></div>
<div className="weather-location">London</div>
<div className="data-container">
    <div className="element">
        <img className="icon" src={humidity} alt="humidity"/>
        <div className="data">
            <div className="humidity-percent"></div>
            <div className="text"> Humidity</div>
        </div>
    </div>
    <div className="element">
        <img className="icon" src={wind} alt="wind"/>
        <div className="data">
            <div className="wind-speed"> </div>
            <div className="text"> Wind Speed</div>
        </div>
        </div>
</div>


        </div>
    )
}
export default Weather;