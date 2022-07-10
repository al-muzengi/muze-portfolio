import React,{useState} from 'react'
import { frameworks } from '../data'
import Error from './Error'
import Reactprojects from '../Components/reactprojects'
import Nodeprojects from '../Components/nodeprojects'

const Projects = () => {
  const [projects, setProjects] = useState('')
  const handleToggle = (e) =>{
      switch(e.target.id){
        case 'one': setProjects(<Reactprojects/>); break;
        case 'two': setProjects(< Nodeprojects/>); break;
        default: setProjects(<Error/>)
      }
  }
  return (
    <div className='projects_container_main'>
      <div className='ch_f'>
        <h1>PROJECTS</h1><br />
        {frameworks.map((fm) =>{
          const {id,title} = fm
          return(
            <div className='fm_items' id={id} onClick={handleToggle}>{title}</div>
          )
        })}
      </div>
      <div className='pr_container'>
        {projects}
      </div>
    </div>
  )
}
export default Projects