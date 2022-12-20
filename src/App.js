import { useReducer } from 'react';
import './App.css';
import DigitButton from './componets/DigitButton';
import OpButton from './componets/OpButton';
import './styles.css'

export const ACTION={
   ADD_DIGIT:'adding-digit',
   ADD_OPER:'adding-operation',
   CLEAR:'clear',
   EVELUATE:'eveluate'
}

const initialState={
  cOp:'',
  pOp:'',
  operation:'',
  overwrite:false
}

const reducer=(state,{type,payload})=>{
  switch(type){
    case ACTION.ADD_DIGIT:
      if(state.overwrite){
        return {...state,cOp:payload.digit,overwrite:false}
      }
      if( payload.digit === '0' &&  state.cOp === '0'){
      return state
      }
      console.log(state.cOp)
      if(payload.digit === '.' && state.cOp.includes('.')){
        return state
      }
      return {...state,cOp:`${state.cOp || '' }${payload.digit}`}

      case ACTION.ADD_OPER:
        // console.log('Asir')
        if(state.cOp === '' && state.pOp === ''){
          return state
        }

        if(state.pOp===''){
          return {
            ...state,
            pOp:state.cOp,
            operation:payload.op,
            cOp:''
          }
        }
        if(state.cOp===''){
          return{
            ...state,
            operation:payload.op
          }

        }
        return {
          ...state,
          pOp:eveluate(state),
          operation:payload.op,
          cOp:''
        }
    case ACTION.CLEAR:
      return {cOp:'',pOp:'',operation:''}
     
    case ACTION.EVELUATE:
      console.log('From eveluate')
      if(state.cOp === ''|| state.pOp=== '' || state.operation ==''){
        return state
      }
      return {
        ...state,
        
        operation:'',
        pOp:'',
        cOp:eveluate(state),
        overwrite:true
      }
    default:
        return state
   }
  

}

const eveluate=({cOp,pOp,operation})=>{

  const prev=parseFloat(pOp)
  const current=parseFloat(cOp)

  if(isNaN(prev)||isNaN(current)) return ''

  let results=''
  switch (operation) {
    case '+':
      results=prev+current
      break;
      case '-':
        results=prev-current
        break;
        case '×':
          results=current*prev
          break;  
          case '÷':
            results=prev/current
            break;

  }
  return results.toString()



}

function App() {
 const [{cOp,pOp,operation},dispatch]= useReducer(reducer,initialState)
  return (
    <div className='calculator-grid'>
       <div className='output-display'>
         <div className='p-value'>{pOp} {operation}</div>
         <div className='c-value'>{cOp}</div>
       </div>
       
       <button onClick={()=>dispatch({type:ACTION.CLEAR})} className='span-two'>AC</button>
       <button>DEL</button>
       <OpButton dispatch={dispatch} op='÷'/>
       <DigitButton dispatch={dispatch} digit='1'/>
       <DigitButton dispatch={dispatch} digit='2'/>
       <DigitButton dispatch={dispatch} digit='3'/>
       <OpButton dispatch={dispatch} op='×'/>
       <DigitButton dispatch={dispatch} digit='4'/>
       <DigitButton dispatch={dispatch} digit='5'/>
       <DigitButton dispatch={dispatch} digit='6'/>
       <OpButton dispatch={dispatch} op='+'/>
       <DigitButton dispatch={dispatch} digit='7'/>
       <DigitButton dispatch={dispatch} digit='8'/>
       <DigitButton dispatch={dispatch} digit='9'/>
       <OpButton dispatch={dispatch} op='-'/>
       <DigitButton dispatch={dispatch} digit='.'/>
       <DigitButton dispatch={dispatch} digit='0'/>
       <button onClick={()=>dispatch({type:ACTION.EVELUATE})} className='span-two'>=</button>
    
       
    </div>
  );
}

export default App;
