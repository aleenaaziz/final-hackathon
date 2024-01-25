import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import ProjectForm from './components/ProjectForm/ProjectForm';
import AllProject from './components/allProject/AllProject';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/submissionForm" element={<ProjectForm/>}/>
        <Route path="/allProject" element={<AllProject/>}/>
      </Routes>
    </div>
  );
}

export default App;
