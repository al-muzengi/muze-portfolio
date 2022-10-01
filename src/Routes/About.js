import React,{useState} from 'react'
import {details} from '../data'
import Skills from '../Components/About Page/skills'
import Education from '../Components/About Page/education'
import Experience from '../Components/About Page/experience'

const About = () => {
  const [info,setInfo] = useState(<Skills/>)
  const handleSelect = (e) => {
    switch(e.target.id){
      case 'one': setInfo(<Skills/>);break;
      case 'two': setInfo(<Education/>);break;
      case 'three': setInfo(<Experience/>);break;
      default: setInfo(< Skills/>);break;
    }
  }
  return (
    <div className='about_container'>
      <div className='details_bar' >
        {details.map( (item) => {
          const {id, title} = item
            return(
              <h3 className='single_det' id={id} onClick={handleSelect}>{title}</h3>
            )
          })
        }
      </div>
      <div className='details_display'>
        {info}
      </div>
    </div>
  )
}

export default About