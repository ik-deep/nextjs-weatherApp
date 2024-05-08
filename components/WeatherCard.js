/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'


const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState('/icons/sun.png')
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('rain') || iconString.toLowerCase().split(',')[0].includes('rain')) {
        setIcon('/icons/rain.png') 
      }
        else   if (iconString.toLowerCase().includes('cloud' || 'cloudy')) {
        setIcon('/icons/cloud.png')      
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon('/icons/sun.png')
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon('/icons/storm.png')
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon('/icons/fog.png')
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon('/icons/snow.png')
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon('/icons/windy.png')
      }
    }
  }, [iconString])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4 text-gray-200'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
     
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <span className='font-normal'>{windspeed} km/h</span></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <span className='font-normal'>{humidity} gm/m&#179;</span></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
    </div>
  )
}

export default WeatherCard