import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext, LoginContextType, UserType } from "../../context/context";


const Menu = () : JSX.Element => {

    //if user is logged in, render their name 
    //if not logged in render sign in button


    const contextPointer = useContext<LoginContextType>(LoginContext);

    const userDetails: UserType = contextPointer.user;

    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
            <li>
                {userDetails.name.length === 0 && <Link to="/signin">Sign In</Link>}
                {userDetails.name.length > 0 && <p>Welcome {userDetails.name}</p>}
                </li>
                
                
        </ul>
    );
}

export default Menu;
