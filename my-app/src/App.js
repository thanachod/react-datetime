import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './pages/Signup';
import Desk from './pages/Desk';
import Task from './pages/Task';
import Home from './pages/Home';
import SignIn from './pages/Signin';

import axios from 'axios';
import { UserContextProvider } from './context/UserContext';
import { ProjectContextProvider } from './context/ProjectContext';

//axios
axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
    <div className="App">

      
      <ProjectContextProvider>
      
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}  />
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/account' element={<Signup />}/>
          
        
            <Route path='/desk' element={<Desk />}/>
            <Route path='/task' element={<Task />}/>
          
          
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      </ProjectContextProvider>
      
      
    </div>
  )
}

export default App;
