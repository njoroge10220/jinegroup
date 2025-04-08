
import React from 'react'

{/** can use the button in all button required places */}
function Button(props){
  return (
    <div className='md:px-2 flex justify-center items-center ' >
      {props.link ? (
        <a href={props.link}>
          <button className=' text-xl text-[#1a1a1a] font-semibold bg-[#d5c28f] font-["Cambria"]
            hover:bg-gradient-to-r from-[#b99a45] to-[#2EC4B6]  rounded-[3px]  md:py-2 py-1 md:px-3 px-1 text-center ' style={{ fontFamily: "Roboto Condensed" }}>
              {props.children} 
          </button>
      </a>
      ) : (
        <button className=' text-xl text-[#1a1a1a] font-semibold bg-[#d5c28f] font-["Cambria"]
        hover:bg-gradient-to-r from-[#b99a45] to-[#2EC4B6]  rounded-[3px]  md:py-2 py-1 md:px-3 px-1 text-center ' onClick={props.onClick} style={{ fontFamily: "Roboto Condensed" }}>
          {props.children} 
      </button>
      )}
    </div>
  )
}

export default Button