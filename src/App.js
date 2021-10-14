import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import "./App.css";
import SignUp from "./components/signUp/SignUp";
import AdminPanel from "./components/adminPanel/AdminPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />

        <Route path="/sign-up" component={SignUp} />
        <Route path="/admin-panel" component={AdminPanel} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
