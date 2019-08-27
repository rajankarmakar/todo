import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import uuid from 'uuid/v4';
import './App.css';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [todoInput, setTodoInput] = useState('');
  const [todo, setTodo] = useState([]);

  const displayInputBox = () => {
    setIsHome(false);
  }

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  }

  const addTodoItem = () => {
    let id = uuid();
    let title = todoInput;
    let complete = false;
    let newTodo = {
      id,
      title,
      complete
    }
    if(title){
      setTodo([newTodo, ...todo]);
    }
    setTodoInput('');
  }
  const makeComplete = (id) => {
    let newTodo = todo.map( item => {
        if(item.id === id){
          item.complete = !item.complete
        }
        return item;
    });
    setTodo([...newTodo]);
  }

  const deleteItem = (id) => {
    let newTodo = todo.filter( item => item.id !== id );
    setTodo([...newTodo]);
  }

  return (
    <React.Fragment> 
      <div className="container">
        <h1 className="text-success mt-2 mb-2 text-center"> Simple TODO App with React and Bootstrap </h1>
      </div>
      { isHome===true ? (
        <h6 className="text-center mt-5"> There is no Todo List. To add todo please { ' '}
        <span 
          className="text-primary"
          style={ {cursor: 'pointer'} }
          onClick={displayInputBox}
        > 
          Click Here 
        </span>
        
        </h6>) : 
        <AddTodo 
          handleChange={handleChange}
          addTodoItem={addTodoItem}
          value={todoInput} 
        /> }
        { todo.length !== 0 ? <Todo todo={todo} makeComplete={makeComplete} deleteItem={deleteItem} /> : <span> </span> }
    </React.Fragment>
  );

}

export default App;
