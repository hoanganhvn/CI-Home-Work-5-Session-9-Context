import {useContext} from 'react';
import AddContext from "./AddContext";

function HomeWork() {
    const loginContext = useContext(AddContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center  mt-5">
                    <h1 className="display-3">{loginContext.login.welcomeHomeWork}</h1>
                </div>
            </div>
        </div>
    );
}

export default HomeWork;