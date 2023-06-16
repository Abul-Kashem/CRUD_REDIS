// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import NavBar from './components/NavBar';
import EditEmployee from './components/EditEmployee';
import NotFound from './components/NotFound';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="all" element={<Home />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/edit/:id' element={<EditEmployee />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
