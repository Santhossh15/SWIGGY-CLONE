import React from "react"
import About from "./About";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo:{
                name:"",
                location:"",
            }
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Santhossh15");
        const json  = await data.json();
        console.log(json);
        this.setState({
            userInfo : (json),
        })
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    render(){
        const{name,location} = this.state.userInfo;
        return(
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : santhossh15@gmail.com</h4>
            </div>
        )
    }
}
export default UserClass;