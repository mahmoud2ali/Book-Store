import { useEffect, useState } from "react";
import BooksTable from "../components/booksTable/page";
import Addbtn from "../components/addBtn/page";
import BooksCard from "../components/booksCard/page";
import styles from "./home.module.css"

function Home() {

    const [show, setShow] = useState("table")
    const [books, setBooks] = useState([]);
    useEffect(() => {

        fetch("http://localhost:3000/books")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error("Error fetching books:", error));

    }, []);

    return (
        <div className={`container`}>   
            <div className={styles.pages}>
                <div onClick={(e)=>{setShow("table")}} className= {`btn btn-primary ${styles.mybtn}`}>Table</div>
                <div onClick={(e)=>{setShow("")}} className= {`btn btn-primary ${styles.mybtn}`}>Cards</div>
            </div>         
            {show == "table" ? <BooksTable books={books} /> : <div className="row "><BooksCard books={books} /></div> }
            <Addbtn />
        </div>
    )
};


export default Home;