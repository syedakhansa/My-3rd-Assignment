import React from 'react'
const Shop = () => {
  return (
    <div className='' >
        <h5 className='mx-20 my-5 text-3xl pt-14'>Summer Favourites</h5> 
      <div>
      <p className=' mx-20 '>Get that summer glow with the must-have products that will stay put all day!</p> <br/> </div>
          <ul className='flex justify-center  mx-3 items-center'> 
            <li>
            <img className='w-10/12 shadow-lg hover:shadow'
          src='/makeup1.jpg'
          alt=''
          /></li>
         <li> <img className='w-10/12 shadow-lg hover:shadow'
          src='/makeup2.jpg'
          /></li>
        <li> <img className='w-10/12 shadow-lg hover:shadow'
         src='/makeup3.jpg'
         /></li>
        <li><img className='w-10/12 shadow-lg hover:shadow'
         src='/makeup4.jpg'
         /> </li>
         </ul>
         <ul className='flex justify-center  mx-3 items-center'>
          <li><button className='bg-pink-300 text-black hover:text-pink-300 hover:bg-neutral-500 py-2  px-2 mx-28 my-5 rounded-2xl'>ADD TO CART</button></li>
          <li><button className='bg-pink-300 text-black hover:text-pink-300 hover:bg-neutral-500 py-2  px-2 mx-28 my-5 rounded-2xl'>ADD TO CART</button></li>
          <li><button className='bg-pink-300 text-black hover:text-pink-300 hover:bg-neutral-500 py-2  px-2 mx-20 my-5 rounded-2xl'>ADD TO CART</button></li>
          <button className='bg-pink-300 text-black hover:text-pink-300 hover:bg-neutral-500 py-2  px-2 mx-28 my-5 rounded-2xl'>ADD TO CART</button>
         </ul>

      </div>
  )
}
 
export default Shop