import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'








ReactDOM.render(
  <App
  />,
  document.querySelector('#root'),
);

// const elem1 = React.createElement('span', { children: 'Hello' })
// const elem2 = React.createElement('span', {children:'world'})
// const element = React.createElement('div', {a:5, b:10, children: [elem1, ' ', elem2]}  )
// console.log(element)

// ReactDOM.render(element, document.querySelector('#root'))

// const elem3 = <span>Hello</span>
// const elem4 = <span>world</span>
// const jsxElement = <div>{elem3}{elem4}</div>
// console.log(jsxElement)

//==============================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
