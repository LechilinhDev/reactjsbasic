import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class Todoadd extends React.Component {
    state = {
        todolist:
            [
                { id: 'abc1', title: 'Making video' },
                { id: 'abc2', title: 'maketing facebook' },
                { id: 'abc3', title: 'play game' },
            ],
        editTodo: {}
    }
    handleDeleteTodo = (itemtodo) => {
        //logic delete todo
        let currentTodo = this.state.todolist.filter((item, index) => item.id !== itemtodo.id);
        this.setState({
            todolist: currentTodo
        })
        toast.success('Delete Sucess!')
    }
    addTodoItem = (todo) => {
        this.setState({
            todolist: [...this.state.todolist, todo]
        })

    }
    handleUpdateTodo = (item) => {
        let { editTodo, todolist } = this.state;
        let isEmpyObj = Object.keys(editTodo).length === 0;

        if (isEmpyObj === false && editTodo.id === item.id) {
            let listTodoCopy = [...todolist];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex((obj => obj.id === item.id));



            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                todolist: listTodoCopy,
                editTodo: {},
            })
            toast.success('update susesss!')
            return;
        }
        this.setState({
            editTodo: item
        })
        console.log('>>>check edit todo', this.state);
    }
    handleEditTodo = (event) => {

        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })


    }

    render() {
        let { todolist, editTodo } = this.state;
        let isEmpyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <div>To Do List</div>
                <AddTodo addItem={this.addTodoItem} />

                {todolist.map((item, index) => {
                    return (
                        <div className="todolistitem" key={item.id}>
                            {isEmpyObj === true ?
                                <>
                                    <span>{index + 1} - {item.title}</span>

                                </>

                                :
                                <>
                                    {editTodo.id === item.id ?
                                        <>
                                            <span>{index + 1} - <input onChange={(event) => this.handleEditTodo(event)} value={editTodo.title} /></span>

                                        </>

                                        :
                                        <>
                                            <span>{index + 1} - {item.title}</span>

                                        </>

                                    }

                                </>

                            }

                            <span>
                                <button className="edit" onClick={() => this.handleUpdateTodo(item)}>
                                    {isEmpyObj === false && editTodo.id === item.id ? 'Save' : 'edit'}

                                </button>
                            </span>
                            <span><button onClick={() => this.handleDeleteTodo(item)}>Delete</button></span>
                        </div>
                    )
                })}

            </>

        )
    }
}

export default Todoadd;