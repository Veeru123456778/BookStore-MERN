import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import BookModel from './BookModel.jsx';
import { Link } from 'react-router-dom';
import DownloadBook from '../../pages/downloadBook.jsx';

function BooksSingleCard({ book }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    console.log("Bishow is working")
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(showModal);

  return (
    <div className=" mb-2 mx-1">
      {/* <div className="card-body">
        <div className="d-flex card-title">
          <PiBookOpenTextLight />
          <h4 className="mx-2">{book.title}</h4>
        </div>
        <div className="d-flex card-subtitle text-body-secondary">
          <BiUserCircle />
          <h4 className="mx-2">{book.author}</h4>
        </div>
        <p className="card-text">{book.publishYear}</p>
        <div className='d-flex justify-content-evenly'>
        <BiShow onClick={handleShowModal} />
          <AiOutlineEdit />
          <BsInfoCircle />
          <MdOutlineDelete />
        </div>
      </div> */}
      <div className="card text-white bg-primary mb-3 w-18">
  <div className="card-header d-flex justify-content-between">
  <div >
  {book.title}
  </div>
  <div className='bg-light text-dark rounded '>
  {book.publishYear}
  </div>
</div>
  <div className="card-body">
    <h5 className="card-title">{book.author}</h5>
    <p className="card-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  </div>
  <div className="btn-group" role="group">
                        <Link to={`/books/details/${book._id}`} className="btn btn-success">
                            <BsInfoCircle />
                        </Link>
                        <Link to={`/books/update/${book._id}`} className="btn  btn-info">
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`/books/delete/${book._id}`} className="btn btn-danger">
                            <MdOutlineDelete />
                        </Link>
                    </div>
</div>
      {showModal &&
       (<BookModel book={book} onClose={handleCloseModal} />)
       }
    </div>
  );
}

export default BooksSingleCard;
