import React from 'react'

function Card() {
  return (
  
    <div className='w-[20%] h-[45%] bg-slate-300 rounded-[10px] overflow-hidden  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' >
    <div className='w-full h-[50%]  overflow-hidden  bg-slate-500'>
      <img className='w-full h-full object-cover object-top ' src="https://plus.unsplash.com/premium_photo-1726619959838-4cc2d7137304?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <h2 className='text-[20px] text-center p-4'><b>Amazon Baiscs</b></h2>
    <h3 className='text-center'><i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, inventore.</i></h3>
   </div>
  
  )
}

export default Card