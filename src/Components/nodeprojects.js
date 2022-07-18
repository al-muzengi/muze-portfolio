import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { all_projects } from '../data'
import { faNode } from '@fortawesome/free-brands-svg-icons'

const Nodeprojects = () => {
  let projects = all_projects.filter((project) =>{
    return project.framework == "Node" 
  })
return (
<>
  <div className='pr_title_icon'>
    <FontAwesomeIcon icon={faNode} size='5x'/>
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
      <div className='node_links'>
        <h4><a href="" target='_blank'>Source Code</a></h4>
      </div>
    </div>
  )
})}
  </div>
</>
)
}

export default Nodeprojects