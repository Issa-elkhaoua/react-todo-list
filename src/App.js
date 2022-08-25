import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import Todoitems from './components/Todoitems'




function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
              <TodoInput/>
              <TodoList/>
              {/* <Todoitems/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
