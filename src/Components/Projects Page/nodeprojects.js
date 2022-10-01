import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { all_projects } from '../../data'
import { projectContext } from '../../Routes/Projects'

const Nodeprojects = () => {
   // The context is to be used in the fullstack version only. Simply interchange all_projects and projects
  const {projects} = useContext(projectContext)
  
  let n_projects = all_projects.filter((project) =>{
    return project.framework == "Node" 
  })
return (
<>
  <div className='pr_title_icon'>
    <FontAwesomeIcon icon={faNode} size='3x'/>
  </div>
  <div className='pr_items_display'>
{n_projects.map((project)=>{
  const {id,title,description} = project
  return(
    <div key={id} className='ind_project'>
      <h1>{title}</h1><br />
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='node_links'>
        <h4><a href="#" target='_blank'>Source Code</a></h4>
      </div>
    </div>
  )
})}
  </div>
</>
)
}

export default Nodeprojects