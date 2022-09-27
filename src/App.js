import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
