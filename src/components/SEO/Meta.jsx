import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = ({ title = 'No Name Page', description, url, type, children, locale }) => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {description && <meta name="description" content={description} />}
                    {description && <meta property="og:description" content={description} />}
                    {title && <meta property="og:title" content={title} />}
                    {type && <meta property="og:type" content={type} />}
                    {url && <meta property="og:url" content={url} />}
                    {locale && <meta property="og:locale" content={locale} />}
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>

            {children}
        </>
    );
};

export default Meta;
