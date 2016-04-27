export default function friends(state = {}, action) {
  switch (action.type) {
    case 'SAY_SOMETHING':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
  }
}