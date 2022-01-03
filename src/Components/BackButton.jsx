
import './button.css'
import { useHistory } from 'react-router-dom';

const BackButton = () => {

    const history = useHistory();
    return <div>
        <button onClick={() => history.push(`/`)} >
            Go Back
      </button>
    </div>
}
export default BackButton