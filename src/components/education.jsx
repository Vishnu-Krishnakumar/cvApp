export function Education({education}){
  return(  
    <div className ="resumeEducation">
        <div>
        <div>{education.education.startDate} - {education.education.endDate}</div>
        </div>  
        <div>
        <div><b>{education.education.schoolName}</b></div>
        <div>{education.education.degreeName}</div> 
        </div>
    </div>
  )
}