import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({hotel}) {
    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
      hotel&&GetPlacePhoto();
    },[hotel])
  
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:hotel
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        //console.log(resp.data.places[0].photos[3].name)
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
        setPhotoUrl(PhotoUrl)
      })
    }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel} target='_blank'> 
                <div className='hover:scale-105 transition-all'>
                    <img src={photoUrl?photoUrl:'/placeholder.JPG'} className='rounded-xl h-[180px] w-full object-cover'/>
                    <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium '>{hotel}</h2>
                        {/* <h2 className='font-xs text-gray-500 '>📍 {hotel}</h2> */}
                    </div>
                </div>
    </Link>
  )
}

export default HotelCardItem