import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/navbar'
import ContactsBar from './Components/contacts'
import Homepage from './Routes/Homepage'
import About from './Routes/About'
import Projects from './Routes/Projects'
import Error from './Routes/Error'


const App = () => {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='*' element={<Error />}/>
      </Routes>
      <ContactsBar />
    </Router>
  )
}

export default App