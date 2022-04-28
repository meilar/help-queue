import * as c from '../actions/ActionTypes'

export default (state = {}, action) => {
  const { type, names, location, issue, id } = action;
  switch(type){
    case c.ADD_TICKET:
        return Object.assign({}, state, {
          [id] : {
            names: names,
            location: location,
            issue: issue,
            id: id
          }
        });
    case c.DELETE_TICKET:
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;      
  }
};