import Link from 'next/link'
import React from 'react'

const HEADER = () => {
  return (
     <div>
         <nav className=""> 
      <h2 className=" font-serif text-6xl  pl-3 pt-3"  >BlushBloom</h2>
      <ul className="flex justify-end font-bold">
       <li> <Link href="/" className="mx-5 cursor-pointer hover:text-yellow-600 " > HOME</Link></li> 
        <li><Link href= "/Shop" className="mx-5 cursor-pointer hover:text-yellow-600" > SHOP</Link></li>
        <li> <Link href="/AboutUs"  className="mx-5 cursor-pointer hover:text-yellow-600 ">ABOUT US</Link></li>
        <li className="mx-5 cursor-pointer hover:text-yellow-600">CONTACT</li>
      </ul></nav>
     </div> 
  
     
  )
}

export default HEADER
