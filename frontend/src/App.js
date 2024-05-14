import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/createBook';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/deleteBook';
import ShowBook from './pages/showBook';
import DownloadBook from './pages/downloadBook';



function App(){
return (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/books/download' element={<DownloadBook/>} />
    <Route path='/books/create' element={<CreateBook/>} />
    <Route path='/books/details/:id' element={<ShowBook/>} />
    <Route path='/books/update/:id' element={<UpdateBook/>} />
    <Route path='/books/delete/:id' element={<DeleteBook/>} />
  </Routes>
)
}

export default App;