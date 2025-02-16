import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Section } from './components/section'
import { Resume } from './components/resume'
import { Button } from './components/button'
import { Education } from './components/education'
import { test } from './components/test'
import { EducationView } from './components/educationView'
import { ExperienceView } from './components/experienceView'
function App() {
  let testApp = test();
  const [personal, setPersonal] = useState({name:'',email:'',phoneNumber:'',address:''});
  const [education, setEducation] = useState({schoolName:'',degreeName:'',startDate:'',endDate:'',id:0})
  const [experience,setExperience] = useState({companyName:'',jobTitle:'',startDate:'',endDate:'',responsibilities:''});
  const [isVisible, setIsVisible] = useState(false)
  const [resumeEducation, setResume] = useState ([testApp.education])
  const [resumeExperience, setResumeEx] = useState([testApp.experience])
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
      let deepEducation = JSON.parse(JSON.stringify(education));
      if(deepEducation.id === undefined) deepEducation.id = 0;
      else deepEducation.id += 1;
      setResume([...resumeEducation, deepEducation] );
      let index = 0;
    }
    else{
      let deepResume = JSON.parse(JSON.stringify(experience));
      if(deepResume.id === undefined) deepResume.id = 0;
      else deepResume.id += 1;
      setResumeEx([...resumeExperience,experience])
    }
  }

  function view(e){
    let key = e.target.id;
    setEducation(resumeEducation[e.target.id]);
  }
  
  function remove(){
    resumeEducation.splice(education.id,1);
    let index = 0;
    resumeEducation.map((e)=>{
      e.id = index++; 
    })
    setEducation({});
  }

  function initial(){
    useEffect(()=>{
      setPersonal(testApp.personal);
    },[])
    return
  }

  function hide(){
    setIsVisible(!isVisible)
  }
  
  function hideAndClick(e){
    if(!isVisible) hide();
    view(e);
  }
  initial(); 
  
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
        <div>
          <EducationView school = {resumeEducation} click = {hideAndClick}/>
        </div>
        {isVisible &&
        <>
          <Section title = "School Name" idName = "schoolName" changeFunction = {educationHandler} value ={education.schoolName}/>
          <Section title = "Title of Study" idName = "degreeName" changeFunction = {educationHandler} value ={education.degreeName} />
          <Section title = "Start Date" inputType = "date" idName = "startDate" changeFunction = {educationHandler} value ={education.startDate}/>
          <Section title = "End Date" inputType = "date"  idName = "endDate" changeFunction = {educationHandler} value ={education.endDate}/>
        </>
        }
        {isVisible &&
          <div>
            <Button text ="Add" idName = "addEd" click = {add}></Button>
            <Button text ="Delete" idName = "delete" click ={remove}></Button>
            <Button text ="Cancel" idName = "cancel" click ={hide}></Button>
            <Button text ="Edit" idName = "edit" ></Button>
          </div>
        }
        {!isVisible &&
          <Button text ="+ Education" className = "addEducation" click ={hide}></Button>
        }
      </div>
      <div className ="info" id ="experienceInfo">
        <h3>Experience</h3>
        <ExperienceView job = {resumeExperience} />
        <Section title = "Company Name" idName = "companyName" changeFunction = {experienceHandler}/>
        <Section title = "Job Title" idName = "jobTitle" changeFunction = {experienceHandler}/>
        <Section title = "Start Date" inputType = "date" idName = "startDate" changeFunction = {experienceHandler}/>
        <Section title = "End Date" inputType = "date" idName = "endDate" changeFunction = {experienceHandler}/>
        <Section title ="Responsibilities" inputType= "textArea" idName = "responsibilities" changeFunction = {experienceHandler}/>
        <div>
          <Button text ="Add" idName = "addExp" click = {add}></Button>
          <Button text ="Delete" idName = "delete"></Button>
          <Button text ="Cancel" idName = "cancel"></Button>
        </div>
        <Button text ="+ Experience" className = "addExperience"></Button>
      </div>
      </div>
      <div className ="resume">
        <Resume cv = {{personal}} experience = {resumeExperience} education ={resumeEducation}/>
      </div>
    </div>
  )

}

export default App
