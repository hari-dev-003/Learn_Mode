import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CoursePage from './pages/CoursePage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<App/>}/>
    <Route path="/courses" element={<CoursePage/>}/>
    </Routes>
  </BrowserRouter>
  
)
