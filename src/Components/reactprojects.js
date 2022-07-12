import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { all_projects } from '../data'

const Reactprojects = () => {
  let projects = all_projects.filter((project) =>{
    return project.framework == "React" 
  })
return (
<>
  <div className='pr_title_icon'>
    <FontAwesomeIcon icon={faReact} size='5x'/>
  </div>
  <div className='pr_items_display'>
{projects.map((project)=>{
  const {id,title,description,framework} = project
  return(
    <div key={id} className='ind_project'>
      <h1>{title}</h1><br />
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='links'>
        <h4><a href="" target='_blank'>Source Code</a></h4>
        <h4><a href="" target='_blank'>Live Display</a></h4>
      </div>
      
    </div>
  )
})}
  </div>
</>
)
}

export default Reactprojects