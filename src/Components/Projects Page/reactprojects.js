import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { all_projects } from '../../data'
import { projectContext } from '../../Routes/Projects'

const Reactprojects = () => {
  // The context is to be used in the fullstack version only. Simply interchange all_projects and projects
  const {projects} = useContext(projectContext)
  
  let r_projects = all_projects.filter((project) =>{
    return project.framework == "React" 
  })
return (
<>
  <div className='pr_title_icon'>
    <FontAwesomeIcon icon={faReact} size='3x'/>
  </div>
  <div className='pr_items_display'>
{r_projects.map((project)=>{
  const {id,title,description} = project
  return(
    <div key={id} className='ind_project'>
      <h1>{title}</h1><br />
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='links_container'>
        <h4 className='links'><a href="#" target='_blank'>Source Code</a></h4>
        <h4 className='links'><a href="#" target='_blank'>Live Display</a></h4>
      </div>
    </div>
  )
})}
  </div>
</>
)
}

export default Reactprojects