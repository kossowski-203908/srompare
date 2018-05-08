export const CHANGE_VOTE = 'CHANGE_VOTE';
export const changeVote = (item) => ({
    type: CHANGE_VOTE,
    item,
});

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item) => ({
    type: ADD_ITEM,
    newItem: item
})