
import './button.css'
import { useHistory } from 'react-router-dom';


const Button = (props) => {

    const id = props.id;
    const history = useHistory();
    return <div>
        <button onClick={() => history.push(`/UserDetail/${ id }`)} >
            More Details
      </button>
    </div>
}
export default Button