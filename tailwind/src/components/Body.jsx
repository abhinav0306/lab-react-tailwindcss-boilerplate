import React from 'react'

const Body = () => {
  return (
    <>
    <div className="px-20 py-10">
    <button className='rounded border-2 border-white-800 bg-sky-500 text-white px-2 py-1 font-bold '>Button One</button>
    <div className='bg-red-200 mt-10 border-2 border-red-300 p-3 rounded text-red-700'> <span className='font-bold'>Alert! </span> This is awesome!</div>
    <div className=" flex justify-center aligh-center mt-10">
    <div className='flex justify-around w-fit gap-5 border-2 rounded p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]' >
        <div>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""  className='w-20 h-10'/>

        </div>
        <div>
            <h1 className='font-bold'>Kalvium Store</h1>
            <h3>You have a new course!</h3>
        </div>
    </div>
    </div>
    <div className="fixed bottom-0 left-0 right-0 bg-slate-400	p-2  text-center text-blue-950	">©️ 2024 Copyright: <span className='font-bold'>Kalvium </span></div>
    </div>
    </>
    
  )
}

export default Body