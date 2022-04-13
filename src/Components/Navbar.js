import { useContext } from 'react';
import AddContext from "./AddContext";

function Navbar() {

    const loginContext = useContext(AddContext);
    //  console.log(loginContext.login.welcome);

    return (
        <div className="container">
            <div className="row">
                <nav className=" col-sm-12 navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand col-sm-8 ">MindX</a>
                    <a className="navbar-brand col-sm-4 justify-content-end">{loginContext.login.welcomeNavbar}</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;