import styles from "./page.module.css"
import { Link } from "react-router-dom"
export default function Addbtn() {
    return <Link to={`/books/add/`} ><button className={`btn btn-primary btn-lg ${styles.mybtn}`}>Add new book</button></Link>
}