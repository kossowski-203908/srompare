const initialState = [
    {id: 1, name: 'ogóreczki', grade: 4.5, gradesAmount: 100, description: 'są najlepsze z taką solą'},
    {id: 2, name: 'pomidorki', grade: 4.5, gradesAmount: 100, description: 'są najlepsze z taką solą'},
    {id: 3, name: 'ogóreczki', grade: 4.5, gradesAmount: 100, description: 'są najlepsze z taką solą'}
];

export function itemReducer( state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}