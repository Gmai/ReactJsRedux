
const initialState = 
	{
		data: { textfield: "insert text" }
	}

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case "TEXT_CHANGED":
			var newState = {
				data: { textfield: action.value }
			};
			return newState
		default:
			return state
	}
}
