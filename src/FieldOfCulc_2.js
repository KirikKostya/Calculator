import React, { useState } from 'react'
import './FieldOfCulc_2.css';
import OneInput from './OneInput';
import ScreenField_2 from './ScreenField_2';

export default function FieldOfCulc_2() {
    const [value_1, setValue_1] = useState([]);

    const start = () =>{
        let Numbers_Buttons = document.querySelector('#qwe'); //нашли все кнопки математических цифр
          let arrayOfNumbs = []; // создали массив для добавление в него каждое значение при нажатия на кнопку-цифру
          console.log(Numbers_Buttons)
        //   Numbers_Buttons.forEach(btn => {
        //      btn.addEventListener('click', ()=>{
        //         console.log('Hello')
        //       arrayOfNumbs.push(btn.value);
        //         setValue_1(arrayOfNumbs.join(''));
        //      } )
        //   })
        Numbers_Buttons.addEventListener('click', ()=>{
            console.log(123)
        })
        console.log('Hello world')
    }
  return (
<div className='MainField'>
    <div className='FieldOfCalc'>
                <ScreenField_2 value_1={value_1} />
        <div className='ConteinerForOperation'>
                <OneInput id={'C'} value={'C'} method={start}/>
                <OneInput id={'qwe'} value={'DEL'}/>
                <OneInput value={'%'}/>
                <OneInput value={'/'}/>
        </div>
        <div className='main'>
            <div className='ConteinerForOperationRigth'>
                <OneInput value={'*'}/>
                <OneInput value={'-'}/>
                <OneInput value={'+'}/>
                <OneInput value={'='}/>
            </div>
            <div className='ConteinerForButtons'>
                <OneInput className={'Buttons'} value={7}/>
                <OneInput className={'Buttons'} value={8}/>
                <OneInput className={'Buttons'} value={9}/>
                <OneInput className={'Buttons'} value={4}/>
                <OneInput className={'Buttons'} value={5}/>
                <OneInput className={'Buttons'} value={6}/>
                <OneInput className={'Buttons'} value={1}/>
                <OneInput className={'Buttons'} value={2}/>
                <OneInput className={'Buttons'} value={3}/>
                <OneInput className={'Buttons'} value={0}/>
                <OneInput className={'Buttons'} value={'00'}/>
                <OneInput className={'Buttons'} value={'.'}/>
            </div>
        </div>
    </div>
</div>
  )
}
