
import './App.css';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/ForgetPassword';
import CreateNewPassword from './Components/CreateNewPassword';
import Earnings from './Components/Earnings';
import DashBoard from './Components/DashBoard';
import Users from './Components/Users';
function App() {
  return (
    <div>
      <Router>
        <Routes>
     
          <Route element={<SignIn/>} path={"/signin"} />
          <Route element={<ForgetPassword />} path={"/forgetpassword"} />
          <Route element={<CreateNewPassword />} path={"/createnewpassword"} />
          <Route element={<DashBoard />} path={"/dashboard"} />
          <Route element={<Earnings />} path={"/earnings"} />
          <Route element={<Users />} path={"/users"} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
