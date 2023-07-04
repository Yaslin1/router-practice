import { Link } from "react-router-dom";

export default function NavList () {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* Link is used for links within your website */}
                <li><a href ="https://github.com" target="_blank" rel="noreferrer">Github</a></li> 
                {/* href for page outside your website. target=_"" will open a new page */}
            </ul>
        </nav>
    )
}