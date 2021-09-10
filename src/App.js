import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MediaCenter from './pages/MediaCenter';
import MediaView from './pages/MediaView';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <Header />
      <div className={'App'}>
        <Switch>
          <Route path="/ReactNetflixHome" exact component={Home} />
          <Route path="/ReactNetflixMediaCenter" component={MediaCenter} />      
          <Route path="/ReactNetflixMediaView" component={MediaView} /> 
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
