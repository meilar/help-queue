export default (state = {}, action) => {
  const { type, names, location, issue, id } = action;
  switch(type){
    case 'ADD_TICKET':
        return Object.assign({}, state, {
          [id] : {
            names: names,
            location: location,
            issue: issue,
            id: id
          }
        });
    case 'DELETE_TICKET':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;      
  }
};