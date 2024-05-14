import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


function BooksTable({books}){
    return (
    <table className="table table-striped">
    <thead className="table-dark">
        <tr>
            <th scope="col">Number</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publish Year</th>
            <th scope="col">Operations</th>
        </tr>
    </thead>
    <tbody>
        {books.map((book, index) => (
            <tr key={book._id}>
                <td className="h-12 w-12">{index + 1}</td>
                <td className="h-12 w-12">{book.title}</td>
                <td className="h-12 w-12">{book.author}</td>
                <td className="h-12 w-12">{book.publishYear}</td>
                <td>
                    <div className="btn-group" role="group">
                        <Link to={`/books/details/${book._id}`} className="btn btn-success">
                            <BsInfoCircle />
                        </Link>
                        <Link to={`/books/update/${book._id}`} className="btn btn-primary">
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`/books/delete/${book._id}`} className="btn btn-danger">
                            <MdOutlineDelete />
                        </Link>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
)
}

export default BooksTable;