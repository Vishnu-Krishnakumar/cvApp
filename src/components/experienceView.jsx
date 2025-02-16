export function ExperienceView({job,click}){
    let index = 0;
    return (
    <div>
      {job.map((resumes)=>(
      <div id = {index++} onClick={click} >{resumes.companyName}</div>
      ))}
    </div>
  )
  }