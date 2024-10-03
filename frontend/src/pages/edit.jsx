import { useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./form.module.css"
export default function Edit() {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuth] = useState("");
    const [publishYear, setPublishYear] = useState("");

    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        console.log(title, author, publishYear);
        const data = {
            title, author, publishYear
        }
        axios.put(`http://localhost:3000/books/${id}`, data).
            then((res) => {
                console.log("book edited successfully.", res.data);
                navigate("/");
            }
            ).
            catch(err => console.log("error on editing book:", err));


    }

    return (
        <div className={`container ${styles.main}`}>
            <h1>Edit book</h1>
            <form>
                <input className="form-control" onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" placeholder="title" />
                <input className="form-control" onChange={(e) => { setAuth(e.target.value) }} value={author} type="text" placeholder="authour" />
                <input className="form-control" onChange={(e) => { setPublishYear(e.target.value) }} value={publishYear} type="text" placeholder="publish year" />

                <button onClick={handleClick} className={`btn btn-primary ${styles.mybtn}`}>Edit</button>
                <Link to='/'><button className={`btn btn-danger ${styles.mybtn}`}>Cancel</button></Link>
            </form>
        </div>
    )
}