const initialState = {
   
}

function Reducer(state = initialState,action){
    switch(action.type){
        case 'changeHandler':
            const name = action.name;
            const value = action.value;
            return {
                ...state,[name]:value
            };
        default:
            return state;
        
    }
}

export default Reducer;