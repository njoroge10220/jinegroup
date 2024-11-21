
import React from 'react'

{/** can use the button in all button required places */}
function Button(props){
  return (
    <div className='md:px-2 justify-center items-center'>
      <button className=' text-xl text-[#1a1a1a] font-semibold bg-[#d5c28f] font-["Cambria"]
       hover:bg-[#b99a45]  rounded-lg  md:py-2 py-1 md:px-3 px-1 '>
          {props.children} 
      </button>
    </div>
  )
}

export default Button