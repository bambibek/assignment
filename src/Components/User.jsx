import './user.css';
import Button from './Button';


const User = (props) => {
    //console.log(props)
    let user = props.user;

    return <div className="user_container">

        <p > Name: {user.name}</p>
        <p>Brewery Type: {user.brewery_type}</p>
        <p > City: {user.city}</p>

        <Button id={user.id} />

    </div>
}
export default User