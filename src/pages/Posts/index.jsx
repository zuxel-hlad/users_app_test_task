import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, postsState } from '@/redux/slices/posts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Meta from '@/components/SEO/Meta';
import UsersList from '@/components/UsersList/UsersList';
import UserDataItem from '@/components/UsersList/UserDataItem/UserDataItem';
import PageTransition from '@/components/PageTransition/PageTransition';

const Posts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(postsState);
    const { userId } = useParams();

    useEffect(() => {
        if (isNaN(userId) || error) {
            navigate('/not-found');
        }

        if (!posts?.length) {
            dispatch(getPosts(userId));
        }
    }, [posts?.length, dispatch, navigate, userId, error]);

    return (
        <PageTransition>
            <Meta
                description="Page about user posts"
                type="article"
                locale="en_EN"
                title={loading ? 'Posts loading...' : 'All Posts'}
                url={window.location.href}>
                <h1 className="title">All Posts</h1>
                <div className="container">
                    <UsersList data={posts} loading={loading} message="No posts now." withLink>
                        {posts?.map(post => (
                            <UserDataItem
                                key={post.id}
                                item={post}
                                detailsLinkPath={`/user/${userId}/posts/post/${post.id}`}
                            />
                        ))}
                    </UsersList>
                </div>
            </Meta>
        </PageTransition>
    );
};

export default Posts;
