import React from 'react'

const AboutProfile = ({img , name , position}) => {
  return (
    <div className='flex flex-col gap-2 w-[370px] h-[564px]'>
        <img className='h-[430px] rounded-md' src={img} alt="" />
        <h1 className='mt-8 text-4xl font-medium'>{name}</h1>
        <p className='text-xl'>{position}</p>
    </div>
  )
}

export default AboutProfile;