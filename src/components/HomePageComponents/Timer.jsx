import React, { useEffect, useState } from 'react'

const Timer = ({ day, month, year, hours, minutes }) => {

    const givenDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
    const currDate = new Date();
    const remMiliSeconds = givenDate.getTime() - currDate.getTime();

    const [time, setTime] = useState(remMiliSeconds);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time])

    const remSeconds = parseInt(Math.floor(time / 1000));
    const remMinutes = parseInt(Math.floor(remSeconds / 60))
    const remHours = parseInt(Math.floor(remMinutes / 60));
    const remDays = parseInt(Math.floor(remHours / 24));

    Math.floor().toString().padStart(2, '0')


    return (
        <>
            <div className='flex gap-[15px]'>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px] font-[500]'>Days</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{Math.floor(remDays).toString().padStart(2, '0')}</p>
                    </div>
                </div>
                <div className='mt-7 text-red-500 font-[800]'>:</div>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px] font-[500]'>Hours</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{Math.floor(remHours % 24).toString().padStart(2, '0')}</p>
                    </div>
                </div>
                <div className='mt-7 text-red-500 font-[800]'>:</div>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px] font-[500]'>Minutes</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{Math.floor(remMinutes % 60).toString().padStart(2, '0')}</p>
                    </div>
                </div>
                <div className='mt-7 text-red-500 font-[800]'>:</div>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px] font-[500]'>Seconds</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{Math.floor(remSeconds % 60).toString().padStart(2, '0')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer;