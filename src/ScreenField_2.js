import React from 'react'
import './ScreenField_2.css'

export default function ScreenField_2({value_1, value_2, mark, result}) {
  return (
    <div className='screen'>
        <p className='watchParagraph'>{value_1 + mark}</p>
        <p id='firsPar'>{value_1}</p>
        <p className='Result'>{result}</p>
    </div>
  )
}
