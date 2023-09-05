import React from "react";

class UserClass extends React.Component{




    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
            userInfo:{
                name:"Dummy User",
                location:"Default",
            }
        };
        // console.log(this.props.name +" Child Constructor");
    }

    async componentDidMount(){
        // console.log(this.props.name+" Child componentDidMount");

        const data=await fetch("https://api.github.com/users/Vainkatesh");
        const userData=await data.json();
        this.setState({userInfo:userData});
        // console.log(userData);

        this.timer=setInterval(()=>{
            // console.log("Namaste React OP")
        },1000);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count !==prevState.count){
            //Do something
            // This was the convention in class components
        }
        // console.log("Component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //Cleaning up setInterval before we unmount the page, move to a new page otherwise it setInterval will keep running
        // console.log("component will unmount");
    }



    render(){
        const {name,location}=this.props;
        const {userInfo,count,count2}=this.state;

        const increaseCount=()=>{
            this.setState({count:this.state.count+1});
        }

        // console.log(this.props.name+" Child render");

        return (
            <div className="user-card">
            <h1>Count: {count}</h1>
            {/* <h1>Count2: {count2}</h1> */}
            <button onClick={increaseCount}>Increase Count</button>
            <h2>Name: {userInfo?.name}</h2>
            <h2>Location: {userInfo?.location}</h2>
            <h2>Contact: vainkateshkashyap1@gmail.com</h2>
            <img src={userInfo?.avatar_url}/>
            </div>
        );
    }
}


export default UserClass;