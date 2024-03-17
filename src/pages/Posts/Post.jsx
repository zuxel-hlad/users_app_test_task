import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, postsState } from '@/redux/slices/posts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Meta from '@/components/SEO/Meta';
import UserDataItem from '@/components/UsersList/UserDataItem/UserDataItem';
import Spinner from '@/components/Spinner/Spinner';
import PageTransition from '@/components/PageTransition/PageTransition';

const Post = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { post, loading, error } = useSelector(postsState);

    const { postId } = useParams();

    useEffect(() => {
        if (isNaN(postId) || error) {
            navigate('/not-found');
        }

        dispatch(getPost(postId));
    }, [postId, dispatch, navigate, error]);

    return (
        <PageTransition>
            <Meta
                description="Page contains information about user post"
                type="article"
                locale="en_EN"
                title={loading ? 'Post loading...' : `Post | #${post && post.id}`}
                url={window.location.href}>
                <h1 className="title">Post details</h1>
                <div className="container">
                    {post && !loading && <UserDataItem item={post} hideDetailsLink />}
                    {loading && <Spinner />}
                </div>
            </Meta>
        </PageTransition>
    );
};

export default Post;
