import React from 'react'

const AboutServices = ({img, heading ,text, bgColor}) => {
  return (
    <div style={{ backgroundColor: bgColor }} className='w-[270px] h-[230px] border rounded-md flex gap-3.5 flex-col justify-center items-center'>
        <img src={img} alt="" />
        <h1 className='text-4xl font-semibold'>{heading}</h1>
        <p>{text}</p>
    </div>
  )
}

export default AboutServices