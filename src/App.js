import React, { Component } from 'react';
// import PaintingList from './components/PaintingList';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
// import paintings from './paintings.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <div>
        <div>
          <p>Total amount todo:{totalCount}</p>
          <p>Completed:{completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        {/* <ColorPicker options={colorPickerOptions} />

        <Dropdown />

        <Counter initialValue={10} />

        <PaintingList items={paintings} /> */}
      </div>
    );
  }
}

export default App;
