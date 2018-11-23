import React from 'react';
import { Alert } from 'antd';

const alertStyle = {
    "width": "50%",
    "margin": "1rem",
    "display": "inline-block"
};

const alertRenderer = (props) => {
    let textLengthWarning = '';
    if(props.text.length>20){
        textLengthWarning = "The text length exceeds the standard length"
    }else if(props.text.length<10){
        textLengthWarning = "The text length is less than the standard length"
    }

    if (!!props.text.length && !!textLengthWarning) {
        return (
            <Alert type="warning" showIcon  style={alertStyle} message={textLengthWarning}/>
        )
    }else{
        return null;
    }

}
const TextLength = (props) => {
    return (
        alertRenderer(props)
    );
}
export default TextLength;