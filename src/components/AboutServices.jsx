import React from 'react'

const AboutServices = ({img , heading, text}) => {
  return (
    <div className='w-[300px] h-[161px] flex flex-col gap-3 justify-center items-center'>
        <img className='w-[80px] h-[80px]' src={img} alt="" />
        <h2 className='font-semibold'>{heading}</h2>
        <p>{text}</p>
    </div>
  )
}

export default AboutServices;