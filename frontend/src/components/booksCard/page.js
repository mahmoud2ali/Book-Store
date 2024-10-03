import { Link } from "react-router-dom";
import styles from "./page.module.css"
export default function BooksCard({ books }) {
    return (
        <>
            {
                books.map((book, index) => (
                    <div key={book.__id} className={`card border-primary mb-3 col-lg-4 col-md-6 col-sm-12 p-3 px-md-5`}>

                        <div className="card-header bg-transparent">
                            <div>{index + 1}. {book.title}</div>
                        </div>
                        <div className="card-body">
                            <div className={styles.author}>{book.author}</div>
                            <div className={styles.publishYear}>{book.publishYear}</div>
                        </div>

                        <div className={`card-footer bg-transparent ${styles.cardLinks}`}>
                            <Link to={`/books/details/${book._id}`} ><i className="fa-solid fa-circle-info"></i>
                            </Link>
                            <Link to={`/books/edit/${book._id}`} ><i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                            <Link to={`/books/delete/${book._id}`} ><i className="fa-solid fa-trash"></i>
                            </Link>
                        </div>
                    </div>
                ))
            }

        </>

    )
}

