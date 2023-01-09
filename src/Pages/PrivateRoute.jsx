import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { user } from '../Api/Url';
function PrivateRoute({children}) {
    const [Login, setLogin] = useState('Loading')
    fetch(`${user}?login=true`).then((res)=>{
        res.json().then((res)=>{
            if(res.length>0){
                localStorage.setItem(Login,res)
                setLogin(true)
               
            }
            else{
                setLogin(false)
            }
        })
    })
if(Login==true){
    return children
}
else if(Login==false) {
    return <Navigate to={'/following'}/>
}
}

export default PrivateRoute;