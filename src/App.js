import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './components/routes/Routes'

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </div>
      </Router>
    );
  }


export default App;
