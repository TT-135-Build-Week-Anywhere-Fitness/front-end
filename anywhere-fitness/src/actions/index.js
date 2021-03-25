



export const addClass = (e) => dispatch => {
    dispatch({type: "API_START"})
    axiosWithAuth().post()
    .then(res=> {
        // dispatch({type: "API_GOOD"})
    })
    .catch(res=>{
        console.log(res)
        dispatch({type: "API_BAD", payload: res.erro})
    })
}

export const getClasses = () => dispatch =>{
    dispatch({ type: "API_START"})
    axiosWithAuth().get("")
    .then(res =>{
        dispatch({type: "API_GOOD"})
        dispatch({type: "SET_CLASSES", payload: res.data.data})
    })
    .catch(err => {
        dispatch({type: "API_BAD"})
    })
}

export const editClass = (data) => dispatch => {
    dispatch({type: "API_START"})
    axiosWithAuth().get("")
    .then(res =>{
        dispatch({type: "API_GOOD"})
        dispatch({type: "CANCEL_EDIT"})
    })
    .catch(err =>{
        console.log(err)
    })
}

export const setEditing = (data) => dispatch =>{
    dispatch({type: "SET_EDITING", payload: data})

}

export const  cancelEdit = () => dispatch =>{
    dispatch({type: "API_BAD"})
}

export const searchClass = (input, inputValue) => dispatch => {
    dispatch ({type: "API_START"})

    axiosWithAuth()
    .get(``)
    .then(res => {
        dispatch({type: "SEARCH", 
    payload: res.data.data.filter(inclass => {
        return inclass[input].includes(inputValue)
    })})
    })
    .catch(err =>{
        dispatch({type: "API_BAD"})
    })
}