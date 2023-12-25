import React from 'react'

const Button = ({text}) => {
  return (
    <button className="border-2 border-emerald-800 hover:border-white text-black hover:bg-gradient-to-r from-emerald-800 to-teal-300 font-semibold hover:text-white px-6 py-2 rounded-lg sm:text-sm w-full md:w-auto duration-300">
    Sign up
        {text}
    </button>
  )
}

export default Button