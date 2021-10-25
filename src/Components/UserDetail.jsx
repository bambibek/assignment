import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import './userdetail.css'

const UserDetail = () => {

    const { id } = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${ id }`)
            .then((value) => value.json()).then((userVal) => setUser(userVal))
    }, [id])

    return <div className="userStyle">
        <div className="shadow">
            {/* <pre>{JSON.stringify(user)} </pre> */}
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>

        </div>
    </div>

}


export default UserDetail