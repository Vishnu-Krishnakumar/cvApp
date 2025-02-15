import { Input } from "./input"
export function Section({title, inputType,idName,changeFunction}){
    if(inputType === 'textArea'){
      return (
        <div>
          <label >
            {title}
            <textarea style={{verticalAlign:"top"}} id ="responsibilities" onChange ={changeFunction}></textarea>
          </label>
        </div>)
    }
    return <div>
              <label>
                {title}
                <Input formType={inputType} idName={idName} changeFunction={changeFunction}/></label>
           </div>
  }