
import User from "./User"
import './App.css';
import { useState, useEffect } from "react";

// import UserDetail from "./Components/UserDetail";



const Home = () => {

    const [userDetail, setUserDetail] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json()).then((userVal) => setUserDetail(userVal))
    }, [])


    return <div className="App">
        {userDetail && (
            userDetail.map((user, index) => {
                return <div key={index}>
                    <User user={user} />
                </div>
            }
            )
        )}
        {/* <User userDetail={userDetail} /> */}
    </div>
}

export default Home