import React from 'react'
import { ACTION } from '../App'

function OpButton({op,dispatch}) {
  return (
    <button onClick={()=>dispatch({type:ACTION.ADD_OPER,payload:{op:op}})}>{op}</button>
  )
}

export default OpButton