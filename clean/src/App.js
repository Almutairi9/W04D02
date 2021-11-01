
import React from 'react';
import Todo from './components/TodoItem'; 
import TodoItem from './components/Item';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
     return (
    <>  
    <Header/>
    <Todo />
   <TodoItem/> 
   <Footer/>
      </> );
      }
 

export default App;
