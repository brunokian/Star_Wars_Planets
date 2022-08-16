import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import TableDisplay from './components/TableDisplay';
import TableProvider from './context/tableProvider';

function App() {
  return (
    <TableProvider>
      <img id="logo" src={ require('./images/logo.png') } alt="title" />
      <NameFilter />
      <NumericFilter />
      <TableDisplay />
    </TableProvider>
  );
}

export default App;
