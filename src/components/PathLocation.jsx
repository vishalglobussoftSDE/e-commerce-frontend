import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const PathLocation = () => {

    const location = useLocation();
    const pathList= location.pathname.split("/");

  return (
    <div className='container mt-15'>
      {pathList.map((item,index)=>{
        const pathname=item;
        let className= index==pathList.length-1 ? "text-black" : "text-gray-400";
        className += " inline";
        return <Link className='' key={item} to={pathname}>{index > 1 && <p className='text-gray-400 mx-[15px] inline'>/</p>}<p className={className}>{pathname}</p></Link>
      })}
    </div>
  )
}

export default PathLocation;