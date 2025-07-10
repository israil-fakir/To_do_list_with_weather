import React from 'react';
import Todo from './components/Todo';
import Todoitems from './components/Todoitems';
import WeatherWidget from './components/WeatherWidget';

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>      
      <Todo/>
    </div>
  );
};

export default App;