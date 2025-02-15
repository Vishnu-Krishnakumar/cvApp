import { Section } from "./section";
import { Input } from "./input";
import { useState } from "react";

export function Resume({cv,experience,education} ){
 
  
  return (<>
  <header>
    <h1>{cv.personal.name}</h1>
    <div>{cv.personal.email} #{cv.personal.phoneNumber} {cv.personal.address}</div>
  </header> 
  
  <h2>Education</h2>
  <div className ="resumeEducation">
    {education.map((resumes)=>(
      <div>
        <div>{resumes.schoolName}</div>
      </div>  
    ))}
    {/* <div>
      <div>{education.education.startDate} - {education.education.endDate}</div>
    </div>  
    <div>
      <div><b>{education.education.schoolName}</b></div>
      <div>{education.education.degreeName}</div> 
    </div> */}
  </div>
  </>)
}