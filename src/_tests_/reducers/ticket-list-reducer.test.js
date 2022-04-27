import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  
  let action;
  const ticketData = {
    names: "Matt & Alex",
    location: '8309',
    issue: "Redux suxx!",
    id: 1
  }
  
  test('Should return defailt state if there is no action type passed into reducer', () => {
    expect(ticketListReducer({}, {type:null})).toEqual({});
  });

  test("Should add new ticket to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
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
});