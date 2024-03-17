import { Link } from 'react-router-dom';
import Spinner from '@/components/Spinner/Spinner';
import './UsersList.scss';

const UsersList = ({ children, loading = false, message = '', data = [], withLink = false }) => {
    return (
        <ul className="users-list">
            {loading && <Spinner />}
            {data.length > 0 && children}
            {!data.length && !loading && (
                <li className="users-list__empty">
                    {message ? message : 'No data now.'}
                    {withLink && <Link to="/">&nbsp;Go Home.</Link>}
                </li>
            )}
        </ul>
    );
};

export default UsersList;
