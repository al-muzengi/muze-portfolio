import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons"

const ContactsBar = () => {
  return (
    <div className='contacts_bar' id="bottom">
    <a href="https://www.linkedin.com/in/alex-muthengi-419033218/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='3x'/></a>
    <a href="https://github.com/al-muzengi" target='_blank' ><FontAwesomeIcon icon={faGithub} size='3x'/></a>
    </div>
  )
}

export default ContactsBar