import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import './userdetail.css'
import BackButton from './BackButton';

const UserDetail = () => {

    const { id } = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {

        fetch(`https://api.openbrewerydb.org/breweries/${ id }`)
            .then((value) => value.json()).then((userVal) => setUser(userVal))
    }, [id])

    return <div className="userStyle">
        <div className="shadow">
            <p>Name: {user.name}</p>
            <p>Brewry Type: {user.brewery_type}</p>
            <p>Street: {user.street}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>County province: {user.county_province}</p>
            <p>Postal_code: {user.postal_code}</p>

        </div>

        <BackButton />
    </div>

}


export default UserDetail