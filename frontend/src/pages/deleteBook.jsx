import React, { useState } from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from "notistack";

function DeleteBook(){
    const {id}= useParams();
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
   const {enqueueSnackbar}=useSnackbar();
   
        function DeleteBook(){
        setLoading(true);
    axios.delete(`https://book-store-mern-delta.vercel.app/books/${id}`)
    .then((response)=>{
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully",{variant:'success'});
        navigate('/');
    }).catch((err)=>{
        console.log(err);
        setLoading(false);
        enqueueSnackbar("Error",{variant:'error'});

    })
}



    return(
        <div className="p-4">
        <BackButton/>
        <div className="d-flex justify-content-evenly">
        <div className="border border-2 p-3 border-primary rounded  my-3 w-45">
       <center> <h5>Are You Sure You Want to Delete this Book?</h5></center>
        {/* <button className="btn btn-danger my-2" onClick={DeleteBook}>Delete</button> */}
        <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-danger my-3 w-90" onClick={DeleteBook} type="button">Yes, Delete It</button>
  {loading ? <Spinner /> : ''}

</div>
</div>
        </div>
        </div>
        )
}

export default DeleteBook;
