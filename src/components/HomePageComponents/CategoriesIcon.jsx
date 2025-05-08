import React from 'react'

const CategoriesIcon = ({icon, title}) => {
  
  return (
    <div className='flex flex-col justify-center items-center border-1 size-[140px] rounded-sm border-gray-400 hover:bg-[#DB4444] hover:text-white'>
        <div className='text-6xl mb-2'>
            {icon}
        </div>
        {title}        
    </div>
  )
}

export default CategoriesIcon;