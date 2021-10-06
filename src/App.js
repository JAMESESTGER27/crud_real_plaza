
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ListEmployee } from './components/ListEmployee';
import { AddEmployee } from "./components/AddEmployee";
import { LoginScreen } from "./components/login/LoginScreen";

function App() {
  return (
    <div>
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route exact path="/" component={LoginScreen}></Route>
          <Route exact path="/employees" component={ListEmployee}></Route>
          <Route path="/add-employee" component={AddEmployee}></Route>
          <Redirect to="/"/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
