import React from 'react';
import './Split.css'

function Split(props) {

    let newHTML = '';
    let num = props.num;

    newHTML = (num === 10) ? <p> Hello there </p> : <h1> Hello world </h1>;
    /*
    switch(num){
        case 5  :   console.log("Do nothing");
                    break 
        case 10 :   newHTML = <p> Hello there </p>;
                    break;
        default :   newHTML = <h1> Hello world </h1>;
    }*/

    function modifySomethingElse (){
        return "Text text more text";
    }

    return (
        <div className={'split ' + props.className} >
            <div>
                {props.content}
                {newHTML}
                {modifySomethingElse()}
            </div>
            <button onClick={props.changeName2}> Change text </button>
        </div>
    );
}

export default Split;