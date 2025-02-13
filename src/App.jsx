import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Section } from './components/section'

function App() {
   const [personal, setPersonal] = useState({name:'',email:'',phoneNumber:''});
   function changeHandler(e){
    let key = e.target.id;
    setPersonal({[key]:e.target.value})
   }
  return (
    <>
      <div className ="info" id ="personalInfo">
        <h3>Personal Info</h3>
        <Section title = "Name" idName = "name" changeFunction ={changeHandler}/>
        <Section title = "Email" idName = "email" changeFunction ={changeHandler}/>
        <Section title = "Phone Number" idName = "phoneNumber" changeFunction ={changeHandler}/>
      </div>
      <div className ="info" id ="educationInfo">
        <h3>Education</h3>
        <Section title = "School Name" idName = "schoolName"/>
        <Section title = "Title of Study" idName = "degreeName"/>
        <Section title = "Start Date" inputType = "date" idName = "startDate" />
        <Section title = "End Date" inputType = "date"  idName = "endDate"/>
      </div>
      <div className ="info" id ="experienceInfo">
        <h3>Experience</h3>
        <Section title = "Company Name" idName = "companyName"/>
        <Section title = "Job Title" idName = "jobTitle"/>
        <Section title = "Start Date" inputType = "date" idName = "startDate" />
        <Section title = "End Date" inputType = "date" idName = "endDate" />
        <Section title ="Responsibilities" inputType= "textArea" idName = "responsibilities"/>
      </div>
      <div>
       
        {personal.name } {personal.email}

      </div>
    </>
  )

}

export default App
