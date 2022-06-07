import Link from 'next/link';

const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h1>Please ensure you are using the correct URL.</h1>
            <Link href='/'>Link to Home Page</Link>
        </div>
    )
}

export default PageNotFound;