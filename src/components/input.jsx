export function Input({formType = "text", idName,changeFunction}){
    
    return <input id = {idName} type = {formType} onChange ={changeFunction}></input>
    
  }