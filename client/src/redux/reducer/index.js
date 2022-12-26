const initial  = {
allpeople : [],
allpeopleC: [],
postpeople: []

}

export default function rootReducer (state= initial, action){

    switch(action.type){
        case 'GET_PEOPLE':
            return{
                ...state,
                allpeople: action.payload,
    
                
            };
            case 'POST_PEOPLE':
                return {
                    ...state,
                    postpeople: action.payload
                }    
             default: return state;
    }
} 