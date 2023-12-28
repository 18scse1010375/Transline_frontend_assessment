import logo from "./logo.svg";
import "./App.css";
import AuthComponent from "./UserRegistration";
import UserRegistration from "./UserRegistration";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDashboard } from "./UserDashboard";

function App() {
  // const [username, setUsername] = useState('');
  return (
    <Router>
      <div className="App">
        
          <Routes>
              
                 <Route path="/" element={<Login />} />
                 <Route path="/Register" element={<UserRegistration />} />
                 <Route path="/User/Dashboard" element={<UserDashboard  />} />
                
                      
                 
          </Routes>
       
     
      </div>

    </Router>
  );
}

export default App;
