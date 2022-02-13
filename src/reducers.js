
// Reducer
// Counter reaction
//---------
let initialState = {count: 0}
export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }

    case 'DECREMENT':
      return { count: state.count - 1 }
      
    default:
      return state
  }

}
