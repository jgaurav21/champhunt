import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register/Register";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./pages/dashboard/Dashboard";

import Canvas from "./components/canvas/Canvas";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import MobileLogin from "./pages/login/MobileLogin";
import GoogleLogin from "./pages/login/GoogleLogin";

import Card from "./components/card/Card";

import Pitch from "./pages/pitch/Pitch";
import Home from "./pages/home/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            {/* <Route exact path="/login" component={LoginPage} /> */}
            <Route exact path="/Register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />

            {/* <Route exact path="/post" component={Feed} /> */}
            <Route exact path="/canvas" component={Canvas} />
            <Route exact path="/registerPage" component={RegisterPage} />
            <Route exact path="/mobileLogin" component={MobileLogin} />
            <Route exact path="/googleLogin" component={GoogleLogin} />

            <Route exact path="/card" component={Card} />

            <Route exact path="/pitch" component={Pitch} />

            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
