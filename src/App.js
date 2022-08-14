import { useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import 'animate.css';

function App() {

  const [listTransactions, setListTransactions] = useState([])
  const [button, setButton] = useState(false)

  return (
    <>
      {
        button === true ? (
          <Dashboard setButton={setButton} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
        ) : (
          <Home setButton={setButton}/>
        )
      }
    </>
  );
}

export default App;
