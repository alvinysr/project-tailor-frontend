import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Logo from "./components/Logo.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlankArea from "./components/BlankArea.jsx";
import CoursesPage from "./components/CoursesPage.jsx";
import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="MainContainer">

          <div className="ContainerOne">
            <Logo />
            <Sidebar />
          </div>

          <div className="ContainerTwo">
            <Routes>
              <Route path="/" element={<BlankArea />}></Route>  
              <Route path="/courses" element={<CoursesPage />}></Route>
              <Route path="/chatbot" element={<Chatbot />}></Route>
            </Routes> 
          </div>
          
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;

