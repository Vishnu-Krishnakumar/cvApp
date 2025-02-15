
export function Button({text, idName, hide, click}){
    return <button id = {idName} onClick={click}>{text}</button>
}