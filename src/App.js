import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Create from './Components/Create';
import Read from './Components/Read'
import Edit from './Components/Edit'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route exact path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
