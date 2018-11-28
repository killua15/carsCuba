const INITIAL_STATE = {
    data: [],
    isFeching:true,
    error: false,
}
export default  taxiReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        case 'feching_data':
        console.log(action.type)
           return{
               ...state,
               data:[],
               isFeching:true
           }
        case 'feching_data_succsess' :
        
          return{
            ...state,
            data:action.data,
            isFeching:false
          }
        default :
          return state
    }
}
