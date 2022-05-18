//Middlware to reqeust api
//You can not continue without an answer
export const reduxMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_USER_DETAILS') {
        fetch("https://swapi.dev/api/people/1/")
            .then(res => res.json())
            .then(
                (result) => {

                    return next(action);
                },

                (error) => {
                    console.log(error)
                }
            )
    }
}