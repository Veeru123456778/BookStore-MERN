import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

function BookModel({ book, onClose }) {
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <PiBookOpenTextLight /> {book.title}
            </h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p><BiUserCircle /> {book.author}</p>
          </div>
          <div className="modal-footer">
            <h5 className="modal-title">{book.publishYear}</h5>
            <button type="button" className="btn btn-primary"><AiOutlineEdit /> Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModel;
