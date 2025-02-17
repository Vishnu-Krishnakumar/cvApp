
export function Button({text, idName, hide, click}){
    return <button className = {hide} id = {idName} onClick={click}>{text}</button>
}