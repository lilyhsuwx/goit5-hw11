import { Component } from "react";
import {Title} from "./Info.styled"

class Info extends Component{

    render(){
        const  {count, done} = this.props
        return(
            <>
            <Title>Кількість:{count}</Title>
            <Title>Виконано:{done}</Title>
            </>
        )
    }
}

export default Info

// Info -  елементи для відображення Загальної кількості завдань та Кількості виконаних