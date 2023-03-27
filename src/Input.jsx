import colorNames from 'colornames'
import React from 'react'

function Input({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="input">
    <label>Add Color Name:</label>
    <input
     type="text"
     autofocus
     placeholder='Add color name'
     required
     value={colorValue}
     onChange={(e) =>{
      setColorValue(e.target.value)
      setHexValue(colorNames(e.currentTarget.value))
     }}
    />
    <button
     type='button'
     onClick={() => setIsDarkText(!isDarkText)}>
    Toggle text Color
    </button>
    </form>
  )
}

export default Input