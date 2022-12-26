import axios from "axios";

export function getallpeople (){
    return async (dispatch) => {
        try {
            let data = await axios.get("/getpeople",{});
            return dispatch({
                type: "GET_PEOPLE",
                payload: data.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postpeople(){
    return async (dispatch)=>{
        try {
            let data = await  axios.post("/people", {});
            return dispatch({
                type: "POST_PEOPLE",
                payload: data.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}