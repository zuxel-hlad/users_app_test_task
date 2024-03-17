import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './UserDataItem.scss';

const UserDataItem = ({ item = null, hideDetailsLink = false, detailsLinkPath = '/' }) => {
    const goBack = useNavigate();

    return (
        <li className="user-data">
            <div className="user-data__main">
                <h3 className="user-data__title"> {item.title}</h3>
                {item.body && <p className="user-data__descr">{item.body}</p>}
            </div>
            <div className="user-data__nav">
                <span className="user-data__number">Item #{item.id}</span>
                <div className="user-data__nav-links">
                    <Link className="user-data__nav-link" to="/">
                        Home
                    </Link>
                    {!hideDetailsLink && (
                        <Link className="user-data__nav-link" to={detailsLinkPath}>
                            See Details
                        </Link>
                    )}
                    <button type="button" onClick={() => goBack(-1)} className="user-data__nav-back">
                        Go back
                    </button>
                </div>
            </div>
        </li>
    );
};

export default UserDataItem;
