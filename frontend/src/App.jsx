import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/courses" element={<CoursePage/>}/>
    </Routes>
    </>
  )
}

export default App
