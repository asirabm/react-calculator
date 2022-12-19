import { useReducer } from 'react';
import './App.css';
import DigitButton from './DigitButton';
import './styles.css'

export const ACTION={
   ADD_DIGIT:'adding-digit'
}
const reducer=(state,{type,payload})=>{
  switch(type){
    case ACTION.ADD_DIGIT:
      if( payload.digit === '0' &&  state.cOp === '0'){
      return state
      }
      console.log(state.cOp)
      if(  payload.digit === '.' && state.cOp.includes('.')){
        return state
      }
      return {...state,cOp:`${state.cOp || '' }${payload.digit}`}

      default:
        break
      
  }

}

function App() {
 const [{cOp,pOp,operation},dispatch]= useReducer(reducer,{})
  return (
    <div className='calculator-grid'>
       <div className='output-display'>
         <div className='p-value'>{pOp} {operation}</div>
         <div className='c-value'>{cOp}</div>
       </div>
       
       <button className='span-two'>AC</button>
       <button>DEL</button>
       <button>÷</button>
       <DigitButton dispatch={dispatch} digit='1'/>
       <DigitButton dispatch={dispatch} digit='2'/>
       <DigitButton dispatch={dispatch} digit='3'/>
       <button>*</button>
       <DigitButton dispatch={dispatch} digit='4'/>
       <DigitButton dispatch={dispatch} digit='5'/>
       <DigitButton dispatch={dispatch} digit='6'/>
       <button>+</button>
       <DigitButton dispatch={dispatch} digit='7'/>
       <DigitButton dispatch={dispatch} digit='8'/>
       <DigitButton dispatch={dispatch} digit='9'/>
       <button>-</button>
       <button>.</button>
       <button>0</button>
       <button className='span-two'>=</button>
    
       
    </div>
  );
}

export default App;
