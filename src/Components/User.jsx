import './user.css';
import Button from './Button';
import { Link } from "react-router-dom"


const User = (props) => {

    let user = props.user;

    return <div className="user_container">
        <div className="profile">
            <p className="profileTextSize">{user.name.charAt(0)}</p>
        </div>
        <p > {user.name}</p>
        <p className="usernameSize">@{user.username}</p>
        <span><a href="#">http://{user.website}</a></span>

        <Button id={user.id} />

        {/* <Link to={`/UserDetail/${ user.id }`}>Details</Link> */}
    </div>
}
export default User