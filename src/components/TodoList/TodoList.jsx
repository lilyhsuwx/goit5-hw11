import { Component } from "react";
import {List, Item, BtnDelete} from "./TodoList.styled"

class TodoList extends Component{

    render(){
        const {todos, onDelete, handleCompleted } = this.props
        return(
            <>
            <List>{todos.map(({id, text, completed}) => {
                return(
                    <Item key={id} style={{display: "flex", gap: 10, justifyContent: "center"}}>
                        <input onChange={() => {handleCompleted(id)}} type="checkbox" checked={completed}/>
                        <p>{text}</p>
                        <BtnDelete type="button" onClick={() => onDelete(id)}>Delete</BtnDelete>
                    </Item>
                )
            })}</List>
            </>
        )
    }
}

export default TodoList

// TodoList - для відображення списку завдань