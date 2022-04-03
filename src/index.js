import React from 'react';
import './index.css';
import Input from "./components/Input"
import Text from "./components/Text"
import Button from "./components/Button"
import Style from "./Style.css";

const index = () => {
    return (
        <div className="wrapper">
            <Text />
            <Input />
            <Button />
         
        </div>);
};
export default index;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals