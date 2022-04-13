import { useState, useContext } from 'react';
import AddContext from "./AddContext";

function Login(props) {
    const loginContext = useContext(AddContext);
    // console.log(loginContext.setLogin);
    const [input, setInput] = useState("");

    const getInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const submitInputValue = (e) => {
        e.preventDefault();
        // console.log(input);
        loginContext.setLogin({
            welcomeNavbar: "Welcome, " + input,
            welcomeHomeWork: "Welcome, " + input,
            popupLogin: "none"
        });
        // console.log(loginContext.login.Imagin);
        // console.log(loginContext.setLogin({welcome: "Welcome " + input}));
    }

    return (
        <div className="container" style={{ display: props.popupLogin }}>
            <div className="row">
                <div className="col-sm-12 ">
                    <form className="col-sm-6 text-center border border-dark mx-auto mt-5" onSubmit={submitInputValue} >
                        <h1 className="display-4 ">{loginContext.login.formLogin}</h1>
                        <input type="text" value={input} onChange={getInput} className="form-control border border-dark mt-2" placeholder={loginContext.login.placeholderLogin} />
                        <button type="submit" className="btn btn-primary mt-2 mb-2"  >{loginContext.login.buttonLogin}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;