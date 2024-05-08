import React, { useEffect, useState } from 'react'

const BackgroundLayout = ({ weather }) => {
  const [image, setImage] = useState("")

  useEffect(() => {
    if (weather && weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().split(',')[0].includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage('/Rainy.jpg') 
      }else if (imageString.toLowerCase().includes('clear')) {
        setImage('/Clear.jpg')
      } else if (imageString.toLowerCase().includes('cloudy')) {
        setImage('/Cloudy.jpg')
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage('/snow.jpg')
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage('fog.jpg')
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage('/Stormy.jpg')
      } else if (imageString.toLowerCase().includes('haze')) {
        setImage('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 bg-black/60 -z-[10]' />
  )
}

export default BackgroundLayout