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
  const [experience,setExperience] = useState({companyName:'',jobTitle:'',startDate:'',endDate:'',responsibilities:'',id:0});
  const [isVisible, setIsVisible] = useState(false);
  const [expVisible, setExpVisible] = useState(false);
  const [resumeEducation, setResume] = useState ([])
  const [resumeExperience, setResumeEx] = useState([])


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
      console.log(education)
      let deepEducation = JSON.parse(JSON.stringify(education));
      if(deepEducation.id === undefined) deepEducation.id = 0;
      else deepEducation.id = 1 + deepEducation.id;
      setResume([...resumeEducation, deepEducation] );
      updateIndex();
      setEducation({schoolName:'',degreeName:'',startDate:'',endDate:'',id:0});
    }
    else{
      let deepResume = JSON.parse(JSON.stringify(experience));
      if(deepResume.id === undefined) deepResume.id = 0;
      else deepResume.id = 1 + deepResume.id;
      setResumeEx([...resumeExperience,deepResume])
      updateIndex();
      setExperience({companyName:'',jobTitle:'',startDate:'',endDate:'',responsibilities:'',id:0});
    }
  }

  function view(e = null){
    if(e === null){
      setEducation({schoolName:'',degreeName:'',startDate:'',endDate:'',id:0});
      setExpVisible({companyName:'',jobTitle:'',startDate:'',endDate:'',responsibilities:'',id:0});
      return;
    }
    let key = e.target.id;
    if(e.target.className === "edView")
      setEducation(resumeEducation[e.target.id]);
    else {
      setExperience(resumeExperience[e.target.id]);
    }
  }

  function updateIndex(){
    let index = 0;
    resumeEducation.map((e)=>{
      e.id = index++; 
    })
    index = 0;
    resumeExperience.map((e)=>{
      e.id = index++;
    })
  }

  function remove(e){
    if(e.target.className === "edDelete"){
      resumeEducation.splice(education.id,1);
      let index = 0;
      resumeEducation.map((e)=>{
        e.id = index++; 
      })
      setEducation({schoolName:'',degreeName:'',startDate:'',endDate:'',id:0});
    }
    else{
      resumeExperience.splice(experience.id,1);
      let index = 0;
      resumeExperience.map((e)=>{
        e.id = index++;
      })
      setExperience({companyName:'',jobTitle:'',startDate:'',endDate:'',responsibilities:'',id:0});
    }
  }

  function initial(){
    useEffect(()=>{
      setPersonal({...personal, ...testApp.personal});
      setResume([testApp.education]);
      setResumeEx([testApp.experience]);
    },[])
    return
  }

  function hide(e){
    if(e.target.className === "edHide" || e.target.className ==="edView")
    {setIsVisible(!isVisible);
     return;
    }
    else if(e.target.className ==="addEducation"){
      setIsVisible(!isVisible);
      view();
    }
    else if(e.target.className ==="addExperience"){
      setExpVisible(!expVisible);
      view();
    }
    else
    setExpVisible(!expVisible);
  }

  function edit(e){
    const resEd = resumeEducation.map(ed =>{
      if(JSON.stringify(ed.id) !== e.target.id){
        return ed;
      }
      else{
    
        return {
          ...ed,
          ...education,
        }
      }})
    setResume(resEd);
  }

  function expEdit(e){
    const resEx = resumeExperience.map(ex =>{
      if(JSON.stringify(ex.id) !== e.target.id){
        return ex;
      }
      else{
    
        return {
          ...ex,
          ...experience,
        }
      }})
      setResumeEx(resEx);
  }

  function hideAndClick(e){
    if(e.target.className === "edView"  ){
      if(!isVisible) hide(e);
      view(e);
    }
    else if( e.target.className ==="addEducation"){
      if(!isVisible) hide(e);
    }
    else if(e.target.className ==="addExperience"){
      if(!expVisible) hide(e);
    }
    else{
      if(!expVisible)hide(e);
      view(e);
    }
  }
  initial(); 
  
  return (
    <div className = "content">
      <div className = "info">
      <div className ="info" id ="personalInfo">
        <h3>Personal Info</h3>
        <Section title = "Name" idName = "name" changeFunction = {personalHandler} value = {personal.name}/>
        <Section title = "Email" idName = "email" changeFunction = {personalHandler} value={personal.email}/>
        <Section title = "Phone Number" idName = "phoneNumber" changeFunction = {personalHandler} value={personal.phoneNumber}/>
        <Section title = "Address" idName = "address" changeFunction = {personalHandler} value={personal.address}/>
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
            <Button hide = "edDelete"text ="Delete" idName = "delete" click ={remove}></Button>
            <Button hide = "edHide"text ="Cancel" idName = "cancel" click ={hide}></Button>
            <Button text ="Edit" idName = {education.id} click ={edit}></Button>
          </div>
        }
        {!isVisible &&
          <Button text ="+ Education" hide = "addEducation" click ={hideAndClick}></Button>
        }
      </div>
      <div className ="info" id ="experienceInfo">
        <h3>Experience</h3>
        <ExperienceView experiences = {resumeExperience} click = {hideAndClick} />
        {expVisible &&
          <>
            <Section title = "Company Name" idName = "companyName" changeFunction = {experienceHandler} value = {experience.companyName}/>
            <Section title = "Job Title" idName = "jobTitle" changeFunction = {experienceHandler} value ={experience.jobTitle}/>
            <Section title = "Start Date" inputType = "date" idName = "startDate" changeFunction = {experienceHandler} value ={experience.startDate}/>
            <Section title = "End Date" inputType = "date" idName = "endDate" changeFunction = {experienceHandler} value = {experience.endDate}/>
            <Section title ="Responsibilities" inputType= "textArea" idName = "responsibilities" changeFunction = {experienceHandler} value = {experience.responsibilities}/>
          </>
        }
        {expVisible &&
          <div>
            <Button text ="Add" idName = "addExp" click = {add}></Button>
            <Button text ="Delete" idName = "delete" click ={remove}></Button>
            <Button text ="Cancel" idName = "cancel" click = {hide}></Button>
            <Button text ="Edit" idName = {experience.id} click ={expEdit}></Button>
          </div>
        }
        {!expVisible &&
          <Button text ="+ Experience" hide = "addExperience"  click = {hideAndClick} ></Button>
        }
      </div>
      </div>
      <div className ="resume">
        <Resume cv = {{personal}} experience = {resumeExperience} education ={resumeEducation}/>
      </div>
    </div>
  )

}

export default App
