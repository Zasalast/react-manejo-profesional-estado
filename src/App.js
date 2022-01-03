 
import './App.css';
import { ClassState } from './containers/ClassState/ClassState'
import { UseState} from './containers/UseState/UseState'
function App() {
  return (
    <div className="App">
      <header className="App-header">     
       Header
      </header>
      <main className="App-main">
        <UseState />
        <ClassState/>
      </main>

      <footer className="App-footer">
        footer
      </footer>
    </div>
  );
}

export default App;
