import React from 'react'
import {useParams,useLocation,useHistory} from 'react-router-dom'

// function User({match}){
//     let username = {color:'#ff5200',fontSize:'50px',display:'inline'}
//     return <h1>Congratulation : <h1 style={username}>{match.params.username}</h1></h1>
// }

//another easy way useParams

function User(){
    let usernamestyle = {color:'#ff5200',fontSize:'50px',display:'inline'}

    const {username,userage} = useParams()
    const location = useLocation()
    const history = useHistory()
    console.log(history)

    const btnClick = () =>{
        alert('Email has sent')
    }

    const btnClick2 = () =>{
        history.goBack()
    }
    const btnClick3 = () =>{
        history.goForward()
    }

    return (
        <>
            <h1>Name : <span style={usernamestyle}> {username} </span> Age: {userage}</h1>
            <span>My current location is {location.pathname}</span>

            {location.pathname === `/user/kabid/15` ? <button className="btn" onClick={btnClick}>Confirmation Mail</button> : null}

            <button onClick={btnClick2}>Back</button>
            <button onClick={btnClick3}>Forward</button>
        </>
    )
}

export default User