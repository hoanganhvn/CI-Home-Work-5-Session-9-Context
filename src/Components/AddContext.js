import {createContext} from 'react';

const defaultValue = {
    welcomeNavbar: "ĐĂNG NHẬP",
    welcomeHomeWork: "",
    popupLogin: "block",
    formLogin: "ĐĂNG NHẬP",
    placeholderLogin: "TÊN ĐĂNG NHẬP...",
    buttonLogin: "ĐĂNG NHẬP"
}
const AddContext = createContext(defaultValue);

export default AddContext;