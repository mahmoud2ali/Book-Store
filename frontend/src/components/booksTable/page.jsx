import { Link } from "react-router-dom";
import styles from "./page.module.css"

export default function BooksTable({ books }) {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Publish Year</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publishYear}</td>
                            <td>
                                <div className={styles.links}>
                                    <Link to={`/books/details/${book._id}`} ><i className="fa-solid fa-circle-info"></i>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`} ><i className="fa-regular fa-pen-to-square"></i>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`} ><i className="fa-solid fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}