import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './UserCard.scss';

const UserCard = ({ user }) => {
    return (
        <motion.li key={user.id} className="user-card" layout>
            <h3 className="user-card__title">{user.name}</h3>
            <h2 className="user-card__title">Username: {user.username}</h2>
            <div className="user-card__info">
                {user.email && (
                    <a href={`mailto:${user.email}`} className="user-card__link">
                        {user.email}
                    </a>
                )}
                {user.phone && (
                    <a href={`tel:${user.phone}`} className="user-card__link">
                        +{user.phone}
                    </a>
                )}
                {user.website && (
                    <a href={`tel:${user.phone}`} className="user-card__link">
                        {user.website}
                    </a>
                )}
            </div>
            <div className="user-card__links">
                <Link className="user-card__link" to={`user/${user.id}/albums`}>
                    View Albums
                </Link>
                <Link className="user-card__link" to={`user/${user.id}/posts`}>
                    View Posts
                </Link>
            </div>
        </motion.li>
    );
};

export default UserCard;
