import { Component } from "react";
import {FilterInput} from "./Filter.styled"

class Filter extends Component{

    render(){
        const {onFilter} = this.props
        return(
            <>
            <FilterInput placeholder="Фільтр по імені" type="text" onChange={(evt) => onFilter(evt.target.value)}/>
            </>
        )
    }
}

export default Filter

// Filter - інпут для фільтрування завдань 