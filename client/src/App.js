import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register/Register";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./pages/dashboard/Dashboard";

import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import AddPost from "./pages/posts/AddPost";
import Post from "./pages/posts/Post";
import Feed from "./pages/posts/Feed";
import Canvas from "./components/canvas/Canvas";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import MobileLogin from "./pages/login/MobileLogin";
import GoogleLogin from "./pages/login/GoogleLogin";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" component={UpdateProfile} />
            <Route exact path="/post" component={Feed} />
            <Route exact path="/canvas" component={Canvas} />
            <Route exact path="/registerPage" component={RegisterPage} />
            <Route exact path="/mobileLogin" component={MobileLogin} />
            <Route exact path="/googleLogin" component={GoogleLogin} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
