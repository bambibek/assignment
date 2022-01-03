import React from 'react';
import User from "./User";
import './App.css';

const SearchList = ({ userDetail }) => {
    return (
        <div className="SearchList">
            {userDetail && (
                userDetail.map((user, index) => {
                    return <div key={index}>
                        <User user={user} />
                    </div>
                }
                )
            )}
        </div>

    );
}
export default SearchList