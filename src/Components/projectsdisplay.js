import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projectsdisplay = ({fm_icon}) => {
  return (
    <>
      <div className='pr_title_icon'>
        <FontAwesomeIcon icon={fm_icon} size='5x'/>
      </div>
      <div className='pr_items_display'>
        <h1>this works for now</h1>
      </div>

    </>
  )
}

export default Projectsdisplay