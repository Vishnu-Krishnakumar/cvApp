import { Section } from "./section";
import { Input } from "./input";
import { useState } from "react";

export function Resume({cv,experience,education} ){
 
  let index =0;
  return (<>
  <header>
    <h1>{cv.personal.name}</h1>
    <div>{cv.personal.email} #{cv.personal.phoneNumber} {cv.personal.address}</div>
  </header> 
  
  <h2>Education</h2>
  <div className ="body">
  <div >
    {education.map((resumes)=>(
    <div id ="resumeEducation">
      <div>
        <div>{resumes.startDate} - {resumes.endDate}</div>
      </div>  
      <div>
        <div><b>{resumes.schoolName}</b></div>
        <div>{resumes.degreeName}</div> 
      </div>
    </div>
    ))}
   </div> 
    </div>
    <h2>Experience</h2>
    <div className="body">
      {experience.map((resumes)=>(
        <div className = "resumeExperience">
          <div>
            <div> {resumes.startDate} - {resumes.endDate}</div>
          </div>
          <div>
            <div><b>{resumes.companyName}</b></div>
            <div>{resumes.jobTitle}</div>
            <div id = "responsibilities">{resumes.responsibilities}</div>
          </div>
        </div>
      ))}
    </div>
  
  </>)
}