import React, { Component } from 'react';
import './FieldOfCalc.css';
// import Buttons from './Buttons'
import App from './App';

export default class FieldOfCalc extends Component {

  constructor(props) {

    super(props)
  
    this.state = {
       value: `Click on button 'C' `,
       WatchValue: '',
       mark: '',
       result: '',
       arrayOfNumbers: [],
       valueTheme_Button: 'Black'
    }
    
    this.changesTheme = this.changesTheme.bind(this);
    this.addValue = this.addValue.bind(this);
    this.removeValues = this.removeValues.bind(this);
    this.MathOperation = this.MathOperation.bind(this); 
    this.SubstractionOperation = this.SubstractionOperation.bind(this);
    this.MultiplicationOperation = this.MultiplicationOperation.bind(this);
    this.DivitionOperation = this.DivitionOperation.bind(this);
    this.DivitionRemainderOperation = this.DivitionRemainderOperation.bind(this);
    this.ResultOutput = this.ResultOutput.bind(this);
  } 


  addValue(){
    this.setState({
      value: 0
    });
    let Numbers_Buttons = document.querySelectorAll('#Number'); //нашли все кнопки математических цифр
    let arrayOfNumbs = []; // создали массив для добавление в него каждое значение при нажатия на кнопку-цифру
    Numbers_Buttons.forEach(btn => {
      btn.addEventListener('click', ()=>{
        arrayOfNumbs.push(btn.value);
        this.setState({
          value: arrayOfNumbs.join(''),
        })
      })
    }) // конец метода ForEach(), добавии к каждой кнопке-цифре обработчик событий
  }

  removeValues(){
    this.addValue();
  }

    DivitionRemainderOperation(){
      let Numbers_Buttons = document.querySelectorAll('#Number'); //нашли все кнопки математических цифр
      let secondArrayOfNumber = []; // создали массив для добавление в него каждое значение при нажатия на кнопку-цифру
      
      this.setState({ 
        mark: '%',
        WatchValue: this.state.value,
        value: this.state.value*0,
      }); // изменили все States  на нужные значения 

      Numbers_Buttons.forEach(btn => {
        btn.addEventListener('click', ()=>{
          secondArrayOfNumber.push(btn.value);
          this.setState({
            value: secondArrayOfNumber.join('')
          })
        })
      }) // конец метода ForEach(), добавии к каждой кнопке-цифре обработчик событий
    
    }  // конец функции остаток от деления

    DivitionOperation(){ // все действия идентичны предыдущей функцией
      let Numbers_Buttons = document.querySelectorAll('#Number');
      let secondArrayOfNumber =[];
      
      this.setState({
        mark: '/',
        WatchValue: this.state.value,
        value: this.state.value*0,
      });

      Numbers_Buttons.forEach(btn => {
        btn.addEventListener('click', ()=>{
          secondArrayOfNumber.push(btn.value);
          this.setState({
            value: secondArrayOfNumber.join('')
          })
        })
      })
    } // конец функции деления

    MultiplicationOperation(){ // все действия идентичны ч предыдущей функцией
      let Numbers_Buttons = document.querySelectorAll('#Number');
      let secondArrayOfNumber =[];
      
      this.setState({
        mark: '*',
        WatchValue: this.state.value,
        value: this.state.value*0,
      });

      Numbers_Buttons.forEach(btn => {
        btn.addEventListener('click', ()=>{
          secondArrayOfNumber.push(btn.value);
          this.setState({
            value: secondArrayOfNumber.join('')
          })
        })
      })
    } // конец функции умноджения 

    SubstractionOperation(){ // все действия идентичны ч предыдущей функцией
      let Numbers_Buttons = document.querySelectorAll('#Number');
      let secondArrayOfNumber =[];
      
      this.setState({
        mark: '-',
        WatchValue: this.state.value,
        value: this.state.value*0,
      });

      Numbers_Buttons.forEach(btn => {
        btn.addEventListener('click', ()=>{
          secondArrayOfNumber.push(btn.value);
          this.setState({
            value: secondArrayOfNumber.join('')
          })
        })
      })
    } // конец функции вычитания 

    MathOperation(){ // все действия идентичны ч предыдущей функцией
      let Numbers_Buttons = document.querySelectorAll('#Number');
      let secondArrayOfNumber =[];
      
      this.setState({
        mark: '+',
        WatchValue: this.state.value,
        value: this.state.value*0,
      });

      Numbers_Buttons.forEach(btn => {
        btn.addEventListener('click', ()=>{
          secondArrayOfNumber.push(btn.value);
          this.setState({
            value: secondArrayOfNumber.join('')
          })
        })
      })
    } // конец функции сложения

    ResultOutput(){ 
      const watchParagraph = document.querySelector('.watchParagraph') ; // нашли значение из параграфа для первых слогаемых
      const ValueParagraph = document.querySelector('#firsPar'); // нашли параграф с текущем значением для ввода
      if(this.state.mark == '+'){ // условие для сложения 
        watchParagraph.remove(); // удаляем два элемента для вывода рузультата (действует для всех елементов с методом remove().)
        ValueParagraph.remove();
        this.setState({
          result: +this.state.WatchValue + +this.state.value
        }) // изменяем значение результата в зависимости от математического знака
      } else if(this.state.mark == '-'){ // условие для вычитания
        watchParagraph.remove();
        ValueParagraph.remove();
        this.setState({
          result: +this.state.WatchValue - +this.state.value
        })
      } else if(this.state.mark == '*'){ // условие для умножения
        watchParagraph.remove();
        ValueParagraph.remove();
        this.setState({
          result: +this.state.WatchValue * +this.state.value
        })
      } else if(this.state.mark == '/'){ // условие для деления
        watchParagraph.remove();
        ValueParagraph.remove();
        this.setState({
          result: +this.state.WatchValue / +this.state.value
        })
      } else if(this.state.mark == '%'){ // условие для деления с остатком(в результате мы получаем остаток от деления)
        // watchParagraph.remove();
        // ValueParagraph.remove();
        watchParagraph.classList.add('none');
        ValueParagraph.classList.add('none');
        this.setState({
          result: +this.state.WatchValue % +this.state.value
        })
        this.addValue()
      };
      
      //if() необходимо проверить наличие класса none у элементов просмотра
    } // конец функции результата(проверка на значение знака и соответствующее вычисление)
  
    changesTheme(){
      if(this.state.valueTheme_Button == 'Black'){
      this.setState({
        valueTheme_Button: 'White'
          })
      } else {
      this.setState({
        valueTheme_Button: 'Black'
          })
      }
        const MainField = document.querySelector('.MainField')
        const Culcfield = document.querySelector('.FieldOfCalc');
        const screen = document.querySelector('.Screen');
        const ButtonsOnTheField = document.querySelectorAll('.Btn');
        const AllParagraphOnTheField = document.querySelectorAll('p');
        MainField.classList.toggle('updateMainField')
        Culcfield.classList.toggle('updateForFieldOfCulc');
        screen.classList.toggle('updateForScreen');
        ButtonsOnTheField.forEach(btn => btn.classList.toggle('updateForBtnsOnTheField'));
        AllParagraphOnTheField.forEach(par => par.classList.toggle('UpdateForParagraph'));
      } // функция для изменения темы калькулятора и заднего фона
      
  render() {
    return (
  <div>
    <input className='changesTheme' type={'button'} value={this.state.valueTheme_Button} onClick={this.changesTheme} />
     <div className='MainField'>
      <div className='FieldOfCalc'>
        <div className='Screen'>
           <p className='watchParagraph'>{this.state.WatchValue + this.state.mark}</p>
           <p id='firsPar'>{this.state.value}</p>
           <p className='Result'>{this.state.result}</p>
       </div>

        <div className='ConteinerForOperation'> 
        <input onClick={this.addValue} type='button' className='Btn' value='C' />
        <input onClick={this.removeValues} type='button' className='Btn' value='DEL' />
        <input onClick={this.DivitionRemainderOperation} type='button' className='Btn' value='%' />
        <input onClick={this.DivitionOperation} type='button' className='Btn' value='/' />
        </div>

        <div className='Main'>
          
          <div className='ConteinerForOperationRigth'>
            <input onClick={this.MultiplicationOperation} type='button' className='Btn' value='*' />
            <input onClick={this.SubstractionOperation} type='button' className='Btn' value='-' />
            <input onClick={this.MathOperation} type='button' className='Btn' value='+' />
            <input onClick={this.ResultOutput} type='button' className='Btn' value='=' />
          </div>
        
          <div className='ConteinerForButtons'>
            <input id='Number' type='button' className='Btn' value='7' />
            <input id='Number' type='button' className='Btn' value='8' />
            <input id='Number' type='button' className='Btn' value='9' />
            <input id='Number' type='button' className='Btn' value='4' />
            <input id='Number' type='button' className='Btn' value='5' />
            <input id='Number' type='button' className='Btn' value='6' />
            <input id='Number' type='button' className='Btn' value='1' />
            <input id='Number' type='button' className='Btn' value='2' />
            <input id='Number' type='button' className='Btn' value='3' />
            <input id='Number' type='button' className='Btn' value='0' />
            <input id='Number' type='button' className='Btn' value='00' />
            <input id='Number' type='button' className='Btn' value='.' />
          </div>

        </div>
      
      </div>
    </div>
  </div>
    )
}

}
