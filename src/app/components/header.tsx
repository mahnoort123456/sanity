'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";

const HeaderPage = () => {
  return (
    <div>
         
    <header className="bg-[#272343] text-white-600 body-font text-[13px]">
  <div className="container mx-auto text-white flex flex-wrap p-5 flex-col md:flex-row items-center">
  <span>
                <Image
        src={require('../../../public/image/check 1.png')}
        alt=''
        width={16}
        className='mr-2'
        height={16}/>
        </span>
        <span>Free Shipping On All Orders Over $50</span>
    <nav className="md:ml-auto flex flex-wrap items-center text-base text-[13px] justify-center">

      <Link href={'/eng'} className="mr-5 hover:text-white-900 flex"><Image src={require('../../../public/image/ENG.png')} alt=''/></Link>
      {/* Eng<span><RiArrowDropDownLine className='mr-1' /></span> */}
      <Link href={'/faqs'} className="mr-5 hover:text-white-900"><Image src={require('../../../public/image/Faqs.png')} alt=''/></Link>
      <Link href={'/need-help'} className="mr-5 hover:text-white-900 flex">
      <Image src={require('../../../public/image/Need Help (1).png')} 
      alt=''
      /></Link>
      {/* <span><CiCircleAlert className='mr-1'/></span> */}
    </nav>
  </div>
</header>

<header className="text-black-600 bg-gray-100 body-font text-[18px]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image
      src={require('../../../public/image/Logo Icon.png')} 
      alt=''
      />
      <span className="ml-3 text-2xl font-semibold">Comforty</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-[#000] font-medium">
      
      <Link href={'/cart'} className=" hover:text-[#272343] flex mr-2 gap-2"><Image src={require('../../../public/image/Info.png')} alt=''/><Image src={require('../../../public/image/No.png')} alt=''/></Link>
    </nav>
   
  </div>
</header>


<header className="text-black bg-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href={'/'} className="mr-5 hover:text-[#007580]">Home</Link>
      <Link href={'/shop'} className="mr-5 hover:text-[#007580]">Shop</Link>
      <Link href={'/product'} className="mr-5 hover:text-[#007580]">Product</Link>
      <Link href={'/pages'} className="mr-5 hover:text-[#007580]">Pages</Link>
      <Link href={'/about'} className="mr-5 hover:text-[#007580]">About</Link>
    </nav>
    
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <p className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
        
       <p className='text-gray-400'>Contact: <span className='text-black'>(808) 555-0111</span> </p> 
      </p>
    </div>
  </div>
</header>


    </div>
  )
}
export default HeaderPage