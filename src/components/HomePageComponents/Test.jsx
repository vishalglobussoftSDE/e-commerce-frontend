import React from 'react'

const Test = () => {

    const handleIn=()=>{
        const ele= document.getElementById("div1");
        ele.style.display="block";
    }

    const handleOut=()=>{
        const ele= document.getElementById("div1");
        ele.style.display="none";
    }

  return (
    <div className='w-[100px] h-[150px] relative bg-emerald-400' onMouseOver={handleIn} onMouseLeave={handleOut}>
        <div id='div1' className='h-[50px] w-full absolute left-0 bottom-0 bg-blue-700 hidden'>

        </div>
    </div>
  )
}

export default Test;