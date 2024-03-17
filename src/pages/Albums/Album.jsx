import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbum, albumsState } from '@/redux/slices/albums';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Meta from '@/components/SEO/Meta';
import UserDataItem from '@/components/UsersList/UserDataItem/UserDataItem';
import Spinner from '@/components/Spinner/Spinner';
import PageTransition from '@/components/PageTransition/PageTransition';

const Album = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { album, loading, error } = useSelector(albumsState);
    const { albumId } = useParams();

    useEffect(() => {
        if (isNaN(albumId) || error) {
            navigate('/not-found');
        }
        dispatch(getAlbum(albumId));
    }, [albumId, dispatch, navigate, error]);

    return (
        <PageTransition>
            <Meta
                description="Page contains information about user album"
                type="article"
                locale="en_EN"
                title={loading ? 'Album loading...' : `Album | #${album && album.id}`}
                url={window.location.href}>
                <h1 className="title">Album details</h1>
                <div className="container">
                    {album && !loading && <UserDataItem item={album} hideDetailsLink />}
                    {loading && <Spinner />}
                </div>
            </Meta>
        </PageTransition>
    );
};

export default Album;
