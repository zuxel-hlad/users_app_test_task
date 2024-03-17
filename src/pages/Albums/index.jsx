import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbums, albumsState } from '@/redux/slices/albums';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Meta from '@/components/SEO/Meta';
import UsersList from '@/components/UsersList/UsersList';
import UserDataItem from '@/components/UsersList/UserDataItem/UserDataItem';
import PageTransition from '@/components/PageTransition/PageTransition';

const Albums = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { albums, loading, error } = useSelector(albumsState);
    const { userId } = useParams();

    useEffect(() => {
        if (isNaN(userId) || error) {
            navigate('/not-found');
        }

        if (!albums?.length) {
            dispatch(getAlbums(userId));
        }
    }, [albums?.length, dispatch, navigate, userId, error]);

    return (
        <PageTransition>
            <Meta
                description="Page about user albums"
                type="article"
                locale="en_EN"
                title={loading ? 'Albums loading...' : 'All albums'}
                url={window.location.href}>
                <h1 className="title">All albums</h1>
                <div className="container">
                    <UsersList data={albums} loading={loading} message="No albums now." withLink>
                        {albums?.map(album => (
                            <UserDataItem
                                key={album.id}
                                item={album}
                                detailsLinkPath={`/user/${userId}/albums/album/${album.id}`}
                            />
                        ))}
                    </UsersList>
                </div>
            </Meta>
        </PageTransition>
    );
};

export default Albums;
