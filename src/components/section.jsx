import { Input } from "./input"
export function Section({title, inputType,idName,changeFunction,value}){
    if(inputType === 'textArea'){
      return (
        <div>
          <label >
            {title}
            <textarea style={{verticalAlign:"top"}} id ="responsibilities" onChange ={changeFunction} value={value}></textarea>
          </label>
        </div>)
    }
    return <div>
              <label>
                {title}
                <Input formType={inputType} idName={idName} changeFunction={changeFunction} inputValue={value}/></label>
           </div>
  }