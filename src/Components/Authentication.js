import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { USER_LOGIN } from '../Util/config';

export default function Authentication(props) {

    const { Component, ...restParams } = props;

    return <Route { ...restParams} render={ (propsRoute) => {
            
        if(localStorage.getItem(USER_LOGIN)) {
            return <Component { ...propsRoute }></Component>;
        }
            
        return <Redirect to="/dang-nhap"></Redirect>
    }} />
        
    
}
