import React from 'react';
import {Image,} from "semantic-ui-react";

const OptionBox = (props) => (
    <Image 
    src= {props.img} 
    size='medium' 
    onClick={() => props.optionClick(props.name)} 
    />




);

export default OptionBox;