import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./details.module.css"
import { Link } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    // console.log(id)
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then((response) => response.json())
            .then((data) => { setBook(data[0]) })
            .catch((error) => console.error("Error fetching books:", error));

    }, []);

    return (
        <div className={styles.main}>
            <div className={`card border-primary mb-3 col-lg-6 p-3 px-md-5`}>

                <div className="card-header bg-transparent">
                    <div>{book.title}</div>
                </div>
                <div className="card-body">
                    <div>{book.author}</div>
                    <div>{book.publishYear}</div>
                    <div>{book.createdAt}</div>
                    <div>{book.updatedAt}</div>

                </div>

                <div className={`card-footer bg-transparent ${styles.cardLinks}`}>
                    <Link to={`/books/edit/${book._id}`} ><i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <Link to={`/books/delete/${book._id}`} ><i className="fa-solid fa-trash"></i>
                    </Link>
                </div>
            </div>
            <Link to='/'><button className={`btn btn-danger ${styles.mybtn}`}>Return home page</button></Link>
        </div>
    )
}