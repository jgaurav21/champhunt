import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register/Register";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./pages/dashboard/Dashboard";

import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
