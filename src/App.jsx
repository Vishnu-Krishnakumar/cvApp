import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Input({formType = "text", idName}){
  console.log(formType)
  return <input id = {idName} type = {formType}></input>
}

function Label({title}){
  return <label>{title}</label>
}

function App() { 
  return (
    <>
    <div className ="info" id ="personalInfo">
      <h3>Personal Info</h3>
      <div>
        <Label title ={"Name"}/> 
        <Input/>
      </div>
      <div>
      <Label title = {"Email"}/>
      <Input/>
      </div>
      <div>
      <Label title = {"Phone Number"}/>
      <Input/>
      </div>  
    </div>
    <div className ="info" id = "education">
      <h3>Education</h3>
      <div>
        <Label title ={"School Name"}/> 
        <Input/>
      </div>
      <div>
        <Label title ={"Title of Study"}/> 
        <Input/>
      </div>
      <div>
        <Label title ={"Date of Study"}/> 
        <Input idName ="start" formType = {"date"}/> 
      </div>
      <div style={{alignSelf:"center"}}>To</div>
      <div>
        <Input idName ="end" formType = {"date"}/> 
      </div>
    </div>
    <div className ="info" id ="experience">
      <h3>Experience</h3>
      <div>
        <Label title ={"Company Name"}/> 
        <Input/>
      </div>
      <div>
        <Label title ={"Position Title"}/> 
        <Input/>
      </div>
      
      <div>
        <Label title ={"Responsibilities"}/> 
        <textarea></textarea>
      </div>
      <div>
        <Label title ={"Date of employment"}/> 
        <Input idName ="start" formType = {"date"}/> 
      </div>
      <div style={{alignSelf:"center",marginLeft:100}}>To</div>
      <div>
        <Input idName ="end" formType = {"date"}/> 
      </div>
      
    </div>
    </>
  )

}

export default App
