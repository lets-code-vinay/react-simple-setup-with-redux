import './App.css';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Parent from './components/Parent';

function App() {

  return (
    <div className="App">
      <Header headtitle="myheader"/>
	  <Parent />
    </div>
  );
}

export default App;
