

import './App.css';
import { useState, useEffect } from "react";
import SearchList from "./SearchList"
import BackButton from './BackButton';


const Home = () => {

    const [userDetail, setUserDetail] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredUsers, setfilteredUsers] = useState([])


    const searchHandler = () => {
        // setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newUserList = userDetail.filter((user) => {
                //return (user.city) === searchTerm
                return user.city.toLowerCase()
                    .includes(searchTerm.toLowerCase())
            });
            setfilteredUsers(newUserList);
        }
        else {
            setfilteredUsers([]);
        }
    }

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };


    useEffect(() => {

        fetch('https://api.openbrewerydb.org/breweries')
            .then((value) => value.json()).then((userVal) => {
                setUserDetail(userVal)
                setfilteredUsers(userVal)
            })
    }, [])


    return <div className="App">

        <div className="searchBar">
            <div className="searchContainer">
                <input className="searchField" type="search" placeholder="please enter City name..." onChange={handleSearch} />
            </div>
            <button className="searchButton" onClick={searchHandler} >
                Search
            </button>
        </div>

        <div className="App">
            <SearchList userDetail={filteredUsers} />
        </div>

    </div>
}

export default Home