// import { Route, Switch } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Component,
  useEffect,
  useState,
  useReducer,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { ToastContainer } from 'react-toastify';
// import PaintingList from './components/Paintings/PaintingList.js';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
// import Form from './components/Form/Form.js';
// import Modal from './components/Modal';
// import Tabs from './components/Tabs';
// import Clock from './components/Clock/Clock';
// import PokemonForm from './components/Pokemons/PokemonForm';
// import PokemonInfo from './components/Pokemons/PokemonInfo';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomeView from './views/HomeView';
import RadioButtons from './components/RadioButtons';
import CustomSelect from './components/CustomSelect';
import axios from 'axios';
import { getContactsList, addContact } from './api/api';
import { useFetch } from './hooks/useFetch';
import { useMutation, useQuery } from 'react-query';
//Objects
// import tabs from './tabs.json';
// import initialTodos from './todos.json';
// import paintings from './paintings.json';
// import initialTodos from './todos.json';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  // const { data, isFetching, refetch } = useQuery({
  //   queryKey: ['contactsList'],
  //   queryFn: getContactsList,
  // });

  // const { mutateAsync } = useMutation({
  //   mutationFn: payload => addContact(payload),
  // });

  // const addNewContact = async () => {
  //   const payload = {
  //     name: 'Lucy',
  //     lastName: 'Grey',
  //     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   };
  //   try {
  //     await mutateAsync(payload);
  //   } catch (error) {}
  // };

  return (
    // <>
    //   <header>
    //     <h1>Contacts</h1>
    //     <main>
    //       <ul>
    //         {isFetching ? (
    //           <div>Loading...</div>
    //         ) : (
    //           data?.map(contact => (
    //             <li key={contact.id}>
    //               {contact.name} {contact.lastName}
    //             </li>
    //           ))
    //         )}
    //       </ul>
    //       <button onClick={addNewContact}>Add contact</button>
    //     </main>
    //   </header>
    // </>
    <Container>
      <AppBar />
      <Routes>
        <Route path="/main" element={<HomeView />}></Route>
      </Routes>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     // pokemonName: '',
//     // todos: initialTodos,
//     // showModal: false,
//   };

//   // deleteTodo = todoId => {
//   //   this.setState(prevState => ({
//   //     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   }));
//   // };

//   // formSubmitHandler = data => {
//   //   console.log(data);
//   // };
//   // toggleModal = () => {
//   //   this.setState(({ showModal }) => ({
//   //     showModal: !showModal,
//   //   }));
//   // };

//   // handleFormSubmit = pokemonName => {
//   //   this.setState({ pokemonName });
//   // };

//   render() {
//     // const { showModal } = this.state;
//     // const totalCount = todos.length;

//     // const completedTodoCount = todos.reduce(
//     //   (total, todo) => (todo.completed ? total + 1 : total),
//     //   0,
//     // );

//     return (
//       <div>

//         {/* <PokemonForm submit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} /> */}
//         {/* <ToastContainer autoClose={3000} /> */}
//         {/* <Tabs items={tabs} /> */}
//         {/* <Clock /> */}

//         {/* <button type="button" onClick={this.toggleModal}>
//           Open modal
//         </button>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Modal content as props.children</h1>
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
//               voluptate dignissimos maxime ea quos laboriosam. Officia ullam
//               consequuntur at quibusdam illum perferendis eos veritatis
//               distinctio corrupti fugiat. Natus laboriosam optio, quasi atque at
//               rem similique laudantium sint aut vitae voluptatem quo
//               consequuntur earum reprehenderit obcaecati dolorem ab repellat
//               eveniet totam!
//             </p>
//             <button type="button" onClick={this.toggleModal}>
//               Close modal
//             </button>
//           </Modal>
//         )} */}
//         {/* <Form onSubmit={this.formSubmitHandler} />
//         <div>
//           <p>Total amount todo:{totalCount}</p>
//           <p>Completed:{completedTodoCount}</p>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

//         <ColorPicker options={colorPickerOptions} />

//         <Dropdown />

//         <Counter initialValue={10} />

//         <PaintingList items={paintings} /> */}
//       </div>
//     );
//   }
// }
