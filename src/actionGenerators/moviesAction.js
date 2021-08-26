import axios from 'axios'

const getMovies=(n)=>{
    return{
        type:'GET_MOVIES',
        payload:n
    }
}

export const startGetMovies=()=>{
    return(dispatch)=>{
    axios.get("https://wookie.codesubmit.io/movies",{
        headers:{Authorization:`Bearer ${"Wookie2019"}`}
    })
    .then((res)=>{
        const result=res.data
        // console.log(result)
        dispatch(getMovies(result))
    })
    .catch((err)=>{
        alert(err.message)
    })
    }
}