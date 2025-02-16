export function Input({formType = "text", idName,changeFunction,inputValue}){
    
    return <input id = {idName} type = {formType} onChange ={changeFunction} value = {inputValue}></input>
    
  }