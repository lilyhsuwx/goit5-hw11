import { Component } from "react";
import { FormBox, InputBox, Btn } from "./TodoEditor.styled";

class TodoEditor extends Component{
    state={
        textValue: '',
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const {textValue} = this.state
        const {onForm} = this.props
        onForm(textValue)

        console.log(textValue);
        
        this.setState({
            textValue: "",
        })
    } 

    render(){
        const {textValue} = this.state
        return(
            <>
            <FormBox onSubmit={this.handleSubmit}>
                <InputBox type="text" value={textValue} onChange={(evt) => this.setState({
                    textValue: evt.target.value
                })}/>
                <Btn type="submit">Submit</Btn>
            </FormBox>
            </>
        )
    }
}

export default TodoEditor

// TodoEditor - форма для додавання нового завдання