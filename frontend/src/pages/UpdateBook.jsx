import React from "react";
import {useNavigate} from 'react-router-dom';
import Spinner from "../components/spinner";
import axios from 'axios';
import { useState } from "react";
import BackButton from "../components/backButton";
import {useParams} from 'react-router-dom';
import { useSnackbar } from "notistack";

function UpdateBook(){
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const {id}=useParams();
    const {enqueueSnackbar}=useSnackbar();

    console.log(id);

    function handleOnSubmit(event){
        event.preventDefault(); // Prevent default form submission behavior

        const book = {
             title,
             author,
             publishYear:year,
        };
        console.log(book);
        setLoading(true);
        axios.put(`book-store-mern-delta.vercel.app/books/${id}`, book)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Book edited successfully",{variant:'success'});
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                enqueueSnackbar("Error",{variant:'error'});
            });

    }

    return(
<div className="p-4">
<BackButton/>
<h1>Edit The Book</h1>
<br/>
<div className="d-flex justify-content-center">
<div className=" border border-2 border-primary p-4 rounded">
<h3>Enter the edit details:</h3>
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
               <center> <button className="btn btn-primary" type="submit" onClick={handleOnSubmit}>Edit</button></center>
                </div>
                </div>
                </div>
   {loading ? <Spinner /> : ''}
</div>
)
}

export default UpdateBook;
