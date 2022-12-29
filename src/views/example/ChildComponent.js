import React from "react";
class ChildComponent extends React.Component {



    render() {
        let { name, age } = this.props;
        return (
            <h1>Child Component {name} - Age : {age}</h1>
        )
    }
}

export default ChildComponent;