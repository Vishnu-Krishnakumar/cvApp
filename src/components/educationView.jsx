export function EducationView({school,click}){
  let index = 0;
  return (
  <div class = "view">
    {school.map((resumes)=>(
    <div className = "edView"id = {index++} onClick={click} >{resumes.schoolName}</div>
    ))}
  </div>
)
}