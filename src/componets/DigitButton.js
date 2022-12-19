import React from 'react'
import { ACTION } from '../App'

function DigitButton({digit,dispatch}) {
  return (
    <button onClick={()=>dispatch({type:ACTION.ADD_DIGIT,payload:{digit:digit}})} >{digit}</button>
  )
}

export default DigitButton