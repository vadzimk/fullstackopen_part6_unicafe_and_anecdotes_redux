import React from 'react'
// import {useDispatch, useSelector} from "react-redux";
import {connect} from 'react-redux'
import {setFilter} from "../reducers/filterReducer.js";

const Filter = (props)=>{
    // const stateFilter = useSelector(state=>state.filter)
    // const dispatch = useDispatch()

    // // hooks version
    // const handleChange =(e)=>{
    //     dispatch(setFilter(e.target.value))
    // }


    const stateFilter = props.stateFilter

    // connect version
    const handleChange=(e)=>{
        props.setFilter(e.target.value)
    }

    return(
        <div>
            filter <input onChange={handleChange} value={stateFilter}/>
        </div>
    )
}

// is a function that returns an object that maps props to state
const mapStateToProps =(state)=>{
    return{
        stateFilter: state.filter
    }
}

// is an object with action creators
const mapDisPatchToProps={
    setFilter
}
const ConnectedFilter = connect(mapStateToProps, mapDisPatchToProps)(Filter)
export default ConnectedFilter