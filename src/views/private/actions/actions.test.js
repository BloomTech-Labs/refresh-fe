import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions'
import fetchMock from 'fetch-mock'

 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_ALL_USERS_SUCCESS', () => {
        fetchMock.getOnce('https://labs-refresh.herokuapp.com/users/', {
            body: { allUsers: [] },
            headers: {'content-type': 'application/json'} 
        })

        const expectedActions = [
            { type: actions.FETCH_ALL_USERS_LOADING },
            { type: actions.FETCH_ALL_USERS_SUCCESS }
        ]
        const store = mockStore({ allUsers: [] })

        return store.dispatch(actions.fetchAllUsers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})








// describe('async actions', () => {
//     afterEach(() => {
//         fetchMock.restore()
//     })

//     it('creates FETCH_ALL_USERS_SUCCESS', () => {
//         fetchMock.getOnce('https://labs-refresh.herokuapp.com/users/', {
//             body: { users: ['Carlos'] },
//             headers: {'content-type': 'application/json'} 
//         })

//         const expectedActions = [
//             { type: actions.FETCH_ALL_USERS_LOADING },
//             { type: actions.FETCH_ALL_USERS_SUCCESS }
//         ]
//         const store = mockStore({ allUsers: [] })

//         return store.dispatch(actions.fetchAllUsers()).then(() => {
//             expect(store.getActions()).toEqual(expectedActions)
//         })
//     })
// })


