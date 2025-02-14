import { Section } from "./section";
import { Input } from "./input";
import { useState } from "react";

export function Resume({cv,experience,education} ){
  
  return <>
  <header>
    <h1>{cv.personal.name}</h1>
    <div>{cv.personal.email} #{cv.personal.phoneNumber} {cv.personal.address}</div>
  </header> 
  <div className ="resumeEducation">
    <div>{experience.experience.jobTitle}</div>
  </div>
  </>
}