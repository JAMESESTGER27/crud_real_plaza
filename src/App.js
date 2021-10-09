
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import dashboard from "./pages/dashboard/dashboard";

// import { ListEmployee } from './components/ListEmployee';
// import { AddEmployee } from "./components/AddEmployee";
// import { dashboard } from "./pages/dashboard/dashboard";

function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Router exact path="/dashboard" component={dashboard}/>
          {/* <Route exact path="/employees/:user" component={ListEmployee}></Route>
          <Route path="/add-employee" component={AddEmployee}></Route> */}
          <Redirect to="/"/>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
