import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Delete() {
    const { id } = useParams();
    // console.log(id)
    const navigate = useNavigate();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                console.log("book deleted successfully..")
                navigate("/");
            })
            .catch((err) => {
                console.log("error deleting book ", err);
            })
    }, []);

    return (
        <div>

        </div>
    )
}