export function ExperienceView({experiences,click}){
    let index = 0;
    return (
    <div class ="view">
      {experiences.map((experience)=>(
      <div className = "expView" id = {index++} onClick={click} >{experience.companyName}</div>
      ))}
    </div>
  )
  }