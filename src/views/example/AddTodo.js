import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {

        this.setState({
            title: event.target.value
        })
    }
    handleAddItem = (event) => {
        console.log('>>>>Check State', this.state)
        if (!this.state.title) {
            toast.error('Mising pramas!')
            return;
        }
        this.props.addItem({
            id: Math.floor(Math.random() * 100000),
            title: this.state.title
        })

        toast.success('Adding sucess!')

        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="todo-add-form">
                <input type="text" onChange={(event) => this.handleChangeTitle(event)} value={this.state.title} />
                <button type="submit" onClick={(event) => this.handleAddItem(event)} >Add</button>
            </div>
        )

    }

}

export default AddTodo;