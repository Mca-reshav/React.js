import './App.css';
import FnComponent from './fnComponent'
import { StateApp } from './fnComponent';
import {Cls} from './clsComponent';
function App() {
  return (
    <div className="App">
      <h1 className='Heading'>React.js</h1>
      <h2>Functional Component</h2><hr/>
      <FnComponent/>
      <StateApp/>

      <div className="App">
        <h2>Class Component</h2><hr/>
        <Cls/>
      </div>
    </div>
  );
}

export default App;
