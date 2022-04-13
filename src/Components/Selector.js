import { useState, useContext } from 'react';
import AddContext from "./AddContext";

function Selector() {
    const loginContext = useContext(AddContext);
    const [selector, setSelector] = useState("VI");
    const onSelect = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSelector(value);
        // console.log(value);

        if (value === "EN") {
            loginContext.setLogin({
                welcomeNavbar: "Login",
                formLogin: "FORM LOGIN",
                placeholderLogin: "USERNAME...",
                buttonLogin: "LOGIN"
            });
        } else {
            loginContext.setLogin({
                welcomeNavbar: "ĐĂNG NHẬP",
                formLogin: "ĐĂNG NHẬP",
                placeholderLogin: "TÊN ĐĂNG NHẬP...",
                buttonLogin: "ĐĂNG NHẬP"
            });
        }
        // console.log(loginContext.login.Imagin);
    }
    return (
        <div className="container">
            <div className="row">
                <nav className=" col-sm-12 navbar navbar-expand-md bg-dark navbar-dark mx-auto   mt-5">
                    <select className=" mx-auto col-sm-2 form-control form-control-sm " value={selector} onChange={onSelect}>
                        <option value="VI">VI</option>
                        <option value="EN">EN</option>
                    </select>
                </nav>
            </div>
        </div>
    );
}

export default Selector;