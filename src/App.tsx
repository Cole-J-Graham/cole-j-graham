import './index.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Project from './Components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;