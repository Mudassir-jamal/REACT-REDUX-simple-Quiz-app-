import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
  } from "react-router-dom";
import Login from "../screen/Login";
import { SignUp } from "../screen/SignUp";
import Dashboard from "../screen/Dashboard";
import About from "../screen/About";
  
  const AppRouter = () => {
      return (<>
          
          <Router>
              {/* <Link to="./login">qqqqq</Link> */}
              <div>
        
              <Routes>
                  <Route index path="/"  element={<Dashboard />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/signup"  element={<SignUp />}/>
                  <Route path="/about"  element={<About />}/>

              </Routes>
              </div>
        
          </Router>
          </>
      )
  }
  
  export default AppRouter
  