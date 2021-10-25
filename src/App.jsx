
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetail from "./Components/UserDetail";
import Home from "./Components/Home";

function App() {




  // console.log(userDetail)



  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/UserDetail/:id">
            <UserDetail />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
