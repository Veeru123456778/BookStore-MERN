import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/spinner.jsx';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from "../components/home/booksTable.jsx";
import BookCard from "../components/home/booksCard.jsx";

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType,setShowType]=useState('Table');
    
    useEffect(() => {
        setLoading(true);
        axios.get('https://book-store-mern-delta.vercel.app/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    return (
        <div className="p-4 ">

<div className="d-flex justify-content-center align-items-center">
            <div>
               {showType==='Table'? <button className="btn btn-dark m-2" id="tableBtn" onClick={()=>{setShowType('Table')}}>Table</button> :<button className="btn btn-primary m-2" id="tableBtn" onClick={()=>{setShowType('Table')}}>Table</button>}
               
                {showType==='card'?<button className="btn btn-dark m-2" id="acrdBtn" onClick={()=>{setShowType('card')}}>Card</button>:<button className="btn btn-primary m-2" id="acrdBtn" onClick={()=>{setShowType('card')}}>Card</button>}
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
    
                <center><h1 className="text-3xl my-8 font-bold">
                    Books List
                </h1></center>
                <Link to={'/books/create'}>
                    <MdOutlineAddBox className="text-primary text-4xl" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType==='card'?(
                <BookCard books={books}/>
            ):(
                <BooksTable books={books}/>
            )}
            
        </div>
    )
}

export default Home;
