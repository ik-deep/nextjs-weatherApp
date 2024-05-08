import React, { useEffect, useState } from 'react'

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('rain') || iconString.toLowerCase().split(',')[0].includes('rain')) {
        setIcon('/icons/rain.png')
      }else if (iconString.toLowerCase().includes('cloud') || iconString.toLowerCase().includes('cloudy')) {
        setIcon('/icons/cloud.png')
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon('/icons/sun.png')
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon('/icons/storm.png')
      } else if (iconString.toLowerCase().includes('fog') || iconString.toLowerCase().includes('overcast')) {
        setIcon('/icons/fog.png')
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon('/icons/snow.png')
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon('/icons/windy.png')
      }
    }
  }, [iconString])
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p> <span>{iconString}</span>
    </div>
  )
}

export default MiniCard