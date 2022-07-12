import React,{useState} from 'react'
import { frameworks } from '../data'
import Error from './Error'
import Reactprojects from '../Components/reactprojects'
import Nodeprojects from '../Components/nodeprojects'
import Fullstackprojects from '../Components/fullstackprojects'

const Projects = () => {
  const [framework, setFramework] = useState(<Error/>)
  const handleToggle = (e) =>{
      switch(e.target.id){
        case 'one': setFramework(<Reactprojects/>); break;
        case 'two': setFramework(< Nodeprojects/>); break;
        case 'three': setFramework(< Fullstackprojects/>); break;
        default: setFramework(<Error/>)
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
        {framework}
      </div>
    </div>
  )
}
export default Projects