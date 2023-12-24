import React from 'react'

const SButton = ({text}) => {
  return (
    <button 
    className="bg-gradient-to-r from-indigo-700 to-purple-400 font-semibold text-white px-4 py-2 rounded-lg">
      {text}
    </button>
  )
}

export default SButton