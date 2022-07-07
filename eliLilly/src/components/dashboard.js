import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Repos from "./Repos";
import axios from 'axios'
import Activity from "./Activity";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  const name=useUserContext();
  const [repos,setRepos]=useState([])
  const [activity,setActivity]=useState([])
  const [repostate,SetrepoState]=useState('')

    const onClickRepos = async()=>{
      try{
      const repo= await axios.get(`https://api.github.com/users/${name.name}/repos`);
      const activity=await axios.get(`https://api.github.com/users/${name.name}/events`)
      setRepos(repo.data);
      setActivity(activity.data)
      SetrepoState(true)
  } catch (err) {
    console.log(err)
  }
  }
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Email : {user.email}</h2>
      <h2>Username : {name.name}</h2>
      <Repos data={repos}/>
      <Activity newdata={activity}/>
      {repostate?(""):(<button onClick={onClickRepos}>REPO</button>)}  
      <button onClick={logoutUser}>Log out</button>    
    </div>
  );
};

export default Dashboard;
