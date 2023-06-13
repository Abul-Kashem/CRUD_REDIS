import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import Update from './components/Update';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/getAllEmp')
    },
    {
      path: '/addEmp',
      element: <AddEmployee></AddEmployee>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
    }
  ])


  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
