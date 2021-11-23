import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import ColorBook from '../ColorBook/ColorBook';
import Footer from '../../Components/Footer/Footer';
import './App.css';

function App() {



  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/color">
          <ColorBook />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
