import { createBrowserRouter } from 'react-router-dom';
import { Home, NotFound, Albums, Album, Posts, Post } from '@/pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },

    {
        path: 'user/:userId/albums',
        element: <Albums />,
        errorElement: <NotFound />
    },

    {
        path: 'user/:userId/albums/album/:albumId',
        element: <Album />,
        errorElement: <NotFound />
    },

    {
        path: 'user/:userId/posts',
        element: <Posts />,
        errorElement: <NotFound />
    },

    {
        path: 'user/:userId/posts/post/:postId',
        element: <Post />,
        errorElement: <NotFound />
    },

    {
        path: '/not-found',
        element: <NotFound />
    }
]);

export default router;
