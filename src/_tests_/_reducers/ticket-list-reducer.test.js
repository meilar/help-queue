import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';
import Moment from 'moment';

describe('ticketListReducer', () => {


  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  let action;

  const ticketData = {
    names: "Matt & Alex",
    location: '8309',
    issue: "Redux suxx!",
    id: 1,
    timeOpen: 0
  }
  
  test('Should return defailt state if there is no action type passed into reducer', () => {
    expect(ticketListReducer({}, {type:null})).toEqual({});
  });

  test('Should add a formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(ticketListReducer({ [id] : ticketData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test("Should add new ticket to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id
    }
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

    test("Should update ticket", () => {
      const newName = "New name for test";
      action = {
        type: c.ADD_TICKET,
        names: newName,
        location: '4b',
        issue: 'Redux action is not working correctly.',
        id: 1 
      }

      expect(ticketListReducer(currentState, action)).toEqual({
        [1] : {
          names: newName,
          location: '4b',
          issue: 'Redux action is not working correctly.',
          id: 1 
        }, 2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }

      });
    });

    test('Should successfully delete a ticket', () => {
      action = {
        type: c.DELETE_TICKET,
        id: 1
      };
      expect(ticketListReducer(currentState, action)).toEqual({
        2: {names: 'Jasmine and Justine',
          location: '2a',
          issue: 'Reducer has side effects.',
          id: 2 }
      });
    });
});