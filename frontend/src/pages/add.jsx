import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import styles from "./form.module.css";

export default function Add() {
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
        axios.post("http://localhost:3000/books", data).
            then((res) => {
                console.log("new book Added", res.data);
                navigate("/");
            }
            ).
            catch(err => console.log("Error adding book:", err));


    }

    return (
        <div className={`container ${styles.main}`}>
            <h1>Add new book</h1>
            <form>
                <input className="form-control" onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" placeholder="title" />
                <input className="form-control" onChange={(e) => { setAuth(e.target.value) }} value={author} type="text" placeholder="authour" />
                <input className="form-control" onChange={(e) => { setPublishYear(e.target.value) }} value={publishYear} type="text" placeholder="publish year" />
                <button onClick={handleClick} className={`btn btn-primary ${styles.mybtn}`}>Add</button>
                <Link to='/'><button className={`btn btn-danger ${styles.mybtn}`}>Cancel</button></Link>
            </form>
        </div>
    )
}