
const initialState = 
	{
		data: { textfield: "insert text" }
	}

export default function appReducer(state = initialState, action) {
	
	switch (action.type) {
		case "TEXT_CHANGED":
			debugger;
			state.data.textfield = action.value
			return state
			//var newState = state
			//newState.data.textfield = action.value
			//return newState;
		default:
			return state
	}
}
