import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import CommonLayout from './components/CommonLayout'
import Clients from './components/Clients'
import ClientDetail from './components/ClientDetail'
import CreateClient from './components/CreateClient'
import Policies from './components/Policies'
import CreateProject from './components/CreateProject'
import ProjectDetail from './components/ProjectDetail'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  const [projects, setProjects] = useState(null)
  const [clients, setClients] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/api/projects')
        .then((resp) => resp.json())
        .then((data) => setProjects(data))

        fetch('http://localhost:8080/api/clients')
        .then((resp) => resp.json())
        .then((data) => setClients(data))
    }, [])

   


  console.log(clients)
  

  return (
    <Router>
      <Routes>
        
        <Route path ="/" element={<CommonLayout />} >
          <Route index element={<Home projects={projects} clients={clients} />} />
          <Route path="/projects" element={<Projects projects={projects} />}/>
          <Route path="/projects/:id/:name" element={<ProjectDetail />} />
          <Route path="/projects/newproject" element={<CreateProject clients={clients} />} />
          <Route path="/clients" element={<Clients clients={clients} />}/>
          <Route path="/clients/:id/:name" element={<ClientDetail />} />
          <Route path="/clients/newclient" element={<CreateClient />}/>
          <Route path="/policies" element={<Policies />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App


// <Router>
//       <Routes>
//         <CommonLayout /> 
//         <Route index element={<Home />}/>
//         <Route path="/projects" element={<Projects />} />
//     </Routes>
//     </Router>