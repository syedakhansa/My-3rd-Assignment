import React from 'react'

const About = () => {
  return (
  <main className=' bg-fuchsia-100 flex'>
<div className='bg-fuchsia-100 h-80 py-40 pl-5'>
  <div className='text-4xl font-serif px-4'> We're not just another makeup <br/>brand</div>
  <div className=' py-7 px-4 '>We believe makeup is more than just a way to enhance your features, it's an <br/> expression of your unique self. Our mission is to empower individuals of all skin tones to embrace their natural beauty and radiate their confidence.</div>
   <div className='button'>
    <button className="bg-yellow-200 text-black  hover:text-slate-800 hover:bg-neutral-500 py-2  px-3 mx-2 my-2 pl-2 rounded-2xl ">Shop The Collection</button>
   </div>
</div>
<div className='flex justify-center  h-96 w-5/6 mx-8 my-40'>
  <img src='/makeup5.jpg'
  />
</div>
</main>

    
  )
}

export default About