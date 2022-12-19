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
      if(state.cOp === '0' && payload.digit === '0'){
      return state
      }
      if(state.cOp.includes('.') && payload.digit === '.'){
        return state
      }
      return {...state,cOp:`${state.cOp || '' }${payload.digit}`}

      default:
        break
      
  }

}

function App() {
 const[{cOp,pOp,operation},dispatch]= useReducer(reducer,{})
  return (
    <div className='calculator-grid'>
       <div className='output-display'>
         <div className='p-value'>{pOp} {operation}</div>
         <div className='c-value'>{cOp}</div>
       </div>
       
       <button className='span-two'>AC</button>
       <button>DEL</button>
       <button>÷</button>
       <button onClick={()=>{dispatch({type:ACTION.ADD_DIGIT,payload:{digit:'1'}})}}>1</button>
       <DigitButton digit="2" dispatch={dispatch}/>
       <button>3</button>
       <button>*</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button>+</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button>-</button>
       <button>.</button>
       <button>0</button>
       <button className='span-two'>=</button>
    
       
    </div>
  );
}

export default App;
