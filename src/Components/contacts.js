import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons"
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'

const ContactsBar = () => {
  return (
    <div className='contacts_bar' id="bottom">
      <div className='linked_icon'>
    <a href="https://www.linkedin.com/in/alex-muthengi-419033218/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
      </div>
      <div className='git_icon'>
    <a href="https://github.com/al-muzengi" target='_blank' ><FontAwesomeIcon icon={faGithub} size='2x'/></a>
      </div>
      <div className='up_icon'>
        <a href="#"><FontAwesomeIcon icon={faAngleUp} size='2x' /></a>
      </div>
    </div>
  )
}

export default ContactsBar