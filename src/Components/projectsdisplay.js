import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { all_projects } from '../data'

const Projectsdisplay = ({fm_icon}) => {

  // Need a way to filter the projects from all_projects and display them 

  return (
    <>
      <div className='pr_title_icon'>
        <FontAwesomeIcon icon={fm_icon} size='5x'/>
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
        </div>
      )
    })}
      </div>
    </>
  )
}

export default Projectsdisplay