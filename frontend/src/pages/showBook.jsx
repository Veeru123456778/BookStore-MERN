import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";


function ShowBook(){
    const [book,setBook]=useState({});
    const [loading,setLoading]=useState(false);

    const {id}= useParams();

    useEffect(()=>{
        setLoading(true);
    axios.get(`https://book-store-mern-delta.vercel.app/books/${id}`)
    .then((response)=>{
        setBook(response.data);
        setLoading(false);
    }).catch((err)=>{
        console.log(err);
        setLoading(false);
    })
},[id])
    return(
        <div className="p-4">
       <BackButton/>
       <h1>Show Book</h1>
       {
        loading?
            (
        <Spinner/>
        ):(
           <div className="d-flex">
           <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Publish Year</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publishYear}</td>
    </tr>
    </tbody>
</table>
           </div>
        )}
        
        </div>
        )
}

export default ShowBook;
