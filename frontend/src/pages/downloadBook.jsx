import axios from 'axios';
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

function DownloadBook() {
    const [downloadMessage, setDownloadMessage] = useState('');

    const handleDownload = () => {
        axios.get('https://book-store-mern-delta.vercel.app/books/download')
            .then(() => {
                setDownloadMessage('Book downloaded successfully');
            })
            .catch((err) => {
                console.error("Error:", err.message);
                setDownloadMessage("Error downloading the book");
            });
    };

    return (
        <div>
            <button onClick={handleDownload}>Download Book</button>
            <h1>{downloadMessage}</h1>
        </div>
    );
}

export default DownloadBook;
