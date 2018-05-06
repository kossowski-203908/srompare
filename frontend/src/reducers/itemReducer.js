const initialState = [
    {id: 1, name: 'ogóreczki', grade: 4.5, gradesAmount: 100, description: 'są najlepsze z taką solą', userRate: 4 },
    {id: 2, name: 'pomidorki', grade: 4.5, gradesAmount: 100, description: 'są najlepsze z taką solą', userRate: null },
    {id: 3, name: 'ogóreczki', grade: 4.5, gradesAmount: 100, description: 'są najlepsze z taką solą', userRate: 2 }
];

export function itemReducer( state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}