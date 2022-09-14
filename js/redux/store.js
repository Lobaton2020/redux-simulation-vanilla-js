const initialStateE = {
    currentUser: {},
    todoList: []
};

export function createStore(reducer, initialState = initialStateE) {

    if (typeof initialState != "object") {
        throw new Error("Bad initialState, It expect an object")
    }

    let state = initialState;
    let updaters = [];

    function dispatch(data) {
        state = reducer(state, data)
        updaters.forEach(fn => fn(state))
    }

    function subscribe(listener) {
        updaters = [...updaters, listener]
    }

    function getState() {
        return JSON.parse(JSON.stringify(state))
    }

    return {
        dispatch,
        subscribe,
        getState,
    }
}