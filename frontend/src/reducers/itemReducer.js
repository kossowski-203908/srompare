import { CHANGE_VOTE, ADD_ITEM } from '../actions/itemActions';

const initialState = [
    {id: 1, name: 'ogóreczki', grade: 4.32, gradesAmount: 100, description: 'są najlepsze z taką solą', userRate: 4 },
    {id: 2, name: 'pomidorki', grade: 4.50, gradesAmount: 100, description: 'są najlepsze z taką solą', userRate: null },
    {id: 3, name: 'ogóreczki', grade: 3.25, gradesAmount: 100, description: 'są najlepsze z taką solą', userRate: 2 }
];

export function itemReducer( state = initialState, action) {
    switch (action.type) {
        case CHANGE_VOTE:
            return state.map(item => item.id === action.item.id ? action.item : item );
        case ADD_ITEM:
            return state.concat(action.newItem);
        default:
            return state;
    }
}