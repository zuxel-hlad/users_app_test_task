import { Link } from 'react-router-dom';
import Meta from '@/components/SEO/Meta';
import PageTransition from '@/components/PageTransition/PageTransition';
const NotFound = () => {
    return (
        <PageTransition>
            <Meta title="Error">
                <div className="not-found">
                    <h1 className="title">404. Page Not-Found</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </Meta>
        </PageTransition>
    );
};

export default NotFound;
