import getDataFromDatabase from '../apiDB/apiCars'
import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const getAllTaxis = data => {
    return {
        type: 'feching_data'
    }
}
export const getAllTaxisSuccsess = data => {
    //console.log(data)
    return {
        type: 'feching_data_succsess',
         data
    }
}
export const getAllTaxisError = data => {
    return {
        type: 'feching_data_error',
       
    }
}

export const fetchTaxis =  (item) => {
     return  (dispatch) =>  {
         dispatch(getAllTaxis())
         if(item==0){
            getDataFromDatabase(item)
            .then((json)=>{dispatch(getAllTaxisSuccsess(json))})
         }else{
            getDataFromDatabaseFilter(item)
            .then((json)=>{dispatch(getAllTaxisSuccsess(json))})
         }
     }
}