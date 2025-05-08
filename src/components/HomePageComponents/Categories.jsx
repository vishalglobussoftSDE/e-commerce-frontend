import React from 'react';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import CategoriesIcon from './CategoriesIcon';

const Categories = () => {

    const categoriesList = [
        {
            icon: <MdOutlinePhoneAndroid/>,
            iconName: "MdOutlinePhoneAndroid",
            title: "Phones"
        },
        {
            icon: <RiComputerLine/>,
            iconName: "RiComputerLine",
            title: "Computers"
        },
        {
            icon: <IoWatchOutline/>,
            iconName: "IoWatchOutline",
            title: "SmartWatch"
        },
        {
            icon: <CiCamera/>,
            iconName: "CiCamera",
            title: "Camera"
        },
        {
            icon: <CiHeadphones/>,
            iconName: "CiHeadphones",
            title: "HeadPhones"
        },
        {
            icon: <IoGameControllerOutline/>,
            iconName: "IoGameControllerOutline",
            title: "Gaming"
        }

    ]
  return (
    <div>
        {categoriesList.map((item)=>{
            return <CategoriesIcon key={item.title} icon={item.icon} title={item.title}/>
        })}
    </div>
  )
}

export default Categories;