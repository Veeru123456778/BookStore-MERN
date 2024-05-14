import axios from "axios";
import React, { useState } from "react";
import Spinner from "../components/spinner";
import BackButton from '../components/backButton';
import {useNavigate} from 'react-router-dom';
import { useSnackbar } from "notistack";

function CreateBook() {
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
  const {enqueueSnackbar}=useSnackbar();

    function handleOnSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        const book = {
             title,
             author,
             publishYear:year,
        };
        
        console.log(book);
        setLoading(true);
        axios.post('book-store-mern-delta.vercel.app/books', book)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Created Successfully',{variant:'success'});
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                enqueueSnackbar('Error',{variant:'err'});
            });
    }

    return (
        <div className="p-4">
        <BackButton />
        <h1> Add a Book</h1>
         
        <div className="d-flex justify-content-center">
<div className=" border border-2 border-primary p-4 rounded">
<h3>Enter the Book details:</h3>
<div>
<div className="mb-3">
                <label for="title" className="form-label">Title</label>
               <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter the title of the book" id="title" />
             </div>
  
                <div className="mb-3">
    <label for="author" className="form-label">Author</label>
    <input type="text" className="form-control" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Enter the Author of the book" id="author" />
  </div>
  <div className="mb-3">
<label for="publishYear" className="form-label">Publish Year</label>
<input type="number" className="form-control" value={year} onChange={(e)=>{const yearValue = parseInt(e.target.value);setYear(yearValue)}} placeholder="Enter the Publish Year of the book" id="publishYear" />
</div> 
               <center> <button className="btn btn-primary" type="submit" onClick={handleOnSubmit}>Create</button></center>
                </div>
                </div>
                </div>
                {loading ? <Spinner /> : ''}
        </div>
    )
}

export default CreateBook;




//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1">
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1">
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
