import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getUsers, setSearch, setSort, memoizedUsers, usersState } from '@/redux/slices/users';
import { useNavigate } from 'react-router-dom';
import Meta from '@/components/SEO/Meta';
import UsersList from '@/components/UsersList/UsersList';
import UserCard from '@/components/UsersList/UserCard/UserCard';
import SearchSort from '@/components/SearchSort/SearchSort';
import PageTransition from '../components/PageTransition/PageTransition';

const Home = () => {
    const { users, loading, error, sort, search } = useSelector(usersState);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const renderedUsers = useSelector(memoizedUsers);

    const setInitialSort = () => {
        if (searchParams.get('sort')) {
            dispatch(setSort(searchParams.get('sort')));
        }
    };

    const setInitialData = useCallback(() => {
        if (!users?.length) {
            dispatch(getUsers());
        }
    }, [dispatch, users?.length]);

    useEffect(() => {
        if (error) {
            navigate('/not-found');
        }

        setInitialData();
    }, [error, dispatch, users?.length, navigate, setInitialData]);

    useEffect(() => {
        setInitialSort();
    }, []);

    return (
        <PageTransition>
            <Meta
                description="Page about users and their info"
                type="article"
                locale="en_EN"
                title={loading ? 'Loading...' : 'Home'}
                url={window.location.href}>
                <h1 className="title">Users</h1>
                <div className="container">
                    <SearchSort
                        sort={sort}
                        search={search}
                        setSearch={search => dispatch(setSearch(search))}
                        setSort={sort => dispatch(setSort(sort))}
                    />
                    <UsersList data={renderedUsers} loading={loading} message="No users now.">
                        {renderedUsers.map(user => (
                            <UserCard user={user} key={user.id} />
                        ))}
                    </UsersList>
                </div>
            </Meta>
        </PageTransition>
    );
};

export default Home;
