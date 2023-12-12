import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
        <h1>Thread Sphere</h1>
        <nav>
            <Link to={'/'}>Topics</Link>
            <a href="">Profile</a>
        </nav>
        </>
    )
}