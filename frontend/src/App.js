import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/home';
import Add from './pages/add';
import Edit from './pages/edit';
import Delete from './pages/delete';
import Details from './pages/details';

function App() {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/add' element={<Add />} />
        <Route path='/books/edit/:id' element={<Edit />} />
        <Route path='/books/delete/:id' element={<Delete />} />
        <Route path='/books/details/:id' element={<Details />} />
    </Routes>
  )
}

export default App;
