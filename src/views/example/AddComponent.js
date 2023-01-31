import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangeTitleSalary = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault();
        console.log('>>>>check state', this.state);
        if (!this.state.title || !this.state.salary) {
            alert('Missing Params');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary: '',
        })

    }
    render() {
        return (
            <form >
                <label htmlFor="fname">Job Title:</label><br />
                <input type="text" onChange={(event) => this.handleChangeTitleSalary(event)} value={this.state.title} /><br />
                <label htmlFor="lname">salary:</label><br />
                <input type="text" onChange={(event) => this.handleChangeSalary(event)} value={this.state.salary} /><br /><br />
                <input type="submit" onClick={(event) => this.handleOnClick(event)} value="Submit" />
            </form>
        )
    }


}

export default AddComponent;