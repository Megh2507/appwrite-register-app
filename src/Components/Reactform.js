import React,{useState} from 'react'
import API from "../api/api"
const Reactform = () => {
    const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        user_email:"",
    });
    let name,value;
    const getUserData = (event) =>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value});
    };
   
    const subclk = () =>{
        let promise = API.database.createDocument('user-info', 'unique()', user);
        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }
    return (
        <div>
                   <div>
            <div className="container">
                <div className="form" >
                    <div className="title">Heya !</div>
                    <div className="subtitle">Welcome to Megha's Cafe!</div>
                    <div className="input-container ic1">
                        <input onChange={getUserData} id="firstname" name="first_name" className="input" type="text" placeholder=" " value={user.first_name}  />
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder">First name</label>
                    </div>
                    <div className="input-container ic2">
                        <input onChange={getUserData} id="lastname" name="last_name" className="input" type="text" placeholder=" " value={user.last_name} />
                        <div className="cut"></div>
                        <label htmlFor="last_name" className="placeholder">Last name</label>
                    </div>
                    <div className="input-container ic2">
                        <input onChange={getUserData} id="useremail" name="user_email" className="input" type="text" placeholder=" " value={user.user_email} />
                        <div className="cut cut-short"></div>
                        <label htmlFor="user_email" className="placeholder">Email</label>
                    </div>
                    <button type="text" className="submit" onClick={subclk}>Submit</button>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Reactform
