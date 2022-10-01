import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { frameworks } from '../data'
import Error from './Error'
import Reactprojects from '../Components/Projects Page/reactprojects'
import Nodeprojects from '../Components/Projects Page/nodeprojects'
import Fullstackprojects from '../Components/Projects Page/fullstackprojects'

export const projectContext = React.createContext()

const Projects = () => {
  const [framework, setFramework] = useState(<Error/>)
  const [projects,setProjects] = useState()

  // To be used in the fullstack version.

  // const fetchData = async () => {
  //   const url = 'http://localhost:5000/api/projects/'
  //   try {
  //     const response = await axios(url)
  //     setProjects(response.data)
  //   } catch (error) {
  //     console.log(error.resonse.status)      
  //   }
  // }
  // useEffect(() =>{
  //   fetchData()
  // } ,[])

  const handleToggle = (e) =>{
      switch(e.target.id){
        case 'one': setFramework(<Reactprojects/>); break;
        case 'two': setFramework(< Nodeprojects/>); break;
        case 'three': setFramework(< Fullstackprojects/>); break;
        default: setFramework(<Error/>)
      }
  }

  return (
    <projectContext.Provider value={{projects}}>
    <div className='projects_container_main'>
      <div className='ch_f'>
        {frameworks.map((fm) =>{
          const {id,title} = fm
          return(
            <div className='fm_items' id={id} onClick={handleToggle}>{title}</div>
          )
        })}
      </div>
      <div className='pr_container'>
        {framework}
      </div>
    </div>
    </projectContext.Provider>
  )
}
export default Projects