import React from 'react'
import './OneInput.css'

export default function OneInput({value, method}) {
  return (
    <div>
        <button className='Btn' value={value} onClick={method}>{value}</button>
    </div>
  )
}
