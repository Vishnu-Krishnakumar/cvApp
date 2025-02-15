import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Section } from './components/section'
import { Resume } from './components/resume'
import { Button } from './components/button'
import { Education } from './components/education'
function App() {
  const [personal, setPersonal] = useState({name:'',email:'',phoneNumber:'',address:''});
  const [education, setEducation] = useState({schoolName:'',degreeName:'',startDate:'',endDate:''})
  const [experience,setExperience] = useState({companyName:'',jobTitle:'',statDate:'',endDate:''});
  let [resumes, setResume] = useState ([])
  let experiences = [];
  let allEducation = [];
  
  function personalHandler(e){
    let key = e.target.id;
    setPersonal({...personal,[key]:e.target.value})
  }
  
  function educationHandler(e){
    let key = e.target.id;
    setEducation({...education,[key]:e.target.value})
  }
  
  function experienceHandler(e){
    let key = e.target.id;
    setExperience({...experience,[key]:e.target.value});
  }
  
  function add(e){
    if(e.target.id === "addEd"){
      allEducation.push(education);
      console.log(resumes);
      setResume([...resumes, education] );
      console.log(resumes);
    }
    else experiences.push(experience);
  }

  return (
    <div className = "content">
      <div className = "info">
      <div className ="info" id ="personalInfo">
        <h3>Personal Info</h3>
        <Section title = "Name" idName = "name" changeFunction = {personalHandler}/>
        <Section title = "Email" idName = "email" changeFunction = {personalHandler}/>
        <Section title = "Phone Number" idName = "phoneNumber" changeFunction = {personalHandler}/>
        <Section title = "Address" idName = "address" changeFunction = {personalHandler}/>
      </div>
      <div className ="info" id ="educationInfo">
        <h3>Education</h3>
        <Section title = "School Name" idName = "schoolName" changeFunction = {educationHandler}/>
        <Section title = "Title of Study" idName = "degreeName" changeFunction = {educationHandler}/>
        <Section title = "Start Date" inputType = "date" idName = "startDate" changeFunction = {educationHandler}/>
        <Section title = "End Date" inputType = "date"  idName = "endDate" changeFunction = {educationHandler}/>
        <div>
          <Button text ="Add" idName = "addEd" click = {add}></Button>
          <Button text ="Delete" idName = "delete"></Button>
          <Button text ="Cancel" idName = "cancel"></Button>
        </div>
        <Button text ="+ Education" className = "addEducation"></Button>
      </div>
      <div className ="info" id ="experienceInfo">
        <h3>Experience</h3>
        <Section title = "Company Name" idName = "companyName" changeFunction = {experienceHandler}/>
        <Section title = "Job Title" idName = "jobTitle" changeFunction = {experienceHandler}/>
        <Section title = "Start Date" inputType = "date" idName = "startDate" changeFunction = {experienceHandler}/>
        <Section title = "End Date" inputType = "date" idName = "endDate" changeFunction = {experienceHandler}/>
        <Section title ="Responsibilities" inputType= "textArea" idName = "responsibilities" changeFunction = {experienceHandler}/>
      </div>
      </div>
      <div className ="resume">
        <Resume cv = {{personal}} experience = {{experience}} education ={resumes}/>
      </div>
    </div>
  )

}

export default App
