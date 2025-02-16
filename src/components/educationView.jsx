export function EducationView({school,click}){
  let index = 0;
  return (
  <div>
    {school.map((resumes)=>(
    <div id = {index++} onClick={click} >{resumes.schoolName}</div>
    ))}
  </div>
)
}