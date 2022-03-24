import React from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
import { useState } from 'react'
function App() {
const[allprofiles, setAllprofile]=useState([
  {
    firstname:"Lailat",
    lastname:"Arafat",
    email:"abubakarilailat@gmail.com",
    phone:"0559718101"
  }
])

const updateProfiles = (profile)=>{
  let arr =allprofiles;
  arr.push(profile);
  setAllprofile([...arr]);
};


  return (
    <div className='app'>
    <h1>Profile Maker</h1>
     <div>
     <ProfileForm submit={updateProfiles}/>

    <hr/>
    <div className='list'>
    {allprofiles.map((person,index)=>(
      <ProfileCard key={index} card={person}/>
    ))}
    </div>
    </div>
    </div>
  )
}

export default App