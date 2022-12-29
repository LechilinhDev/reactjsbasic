import React from "react";
import ChildComponent from "./ChildComponent";
class Mycomponent extends React.Component {

    state = {
        firtName: '',
        lastName: ''
    }

    handleFirstName = (event) => {
        this.setState({
            firtName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault();
        console.log('>>>>check state', this.state);
    }
    render() {
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" onChange={(event) => this.handleFirstName(event)} value={this.state.firtName} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" onChange={(event) => this.handleChangeLastName(event)} value={this.state.lastName} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleOnClick(event)} value="Submit" />
                </form>

                < ChildComponent name={'Hoàng Văn Thái'} age={'88'} />


            </>
        )


    }
}

export default Mycomponent;