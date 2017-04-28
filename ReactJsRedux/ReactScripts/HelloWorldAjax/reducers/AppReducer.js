
const initialState = 
	{
		message: "Hello World"
	}

export default function appReducer(state = initialState, action) {
	
	switch (action.type) {
		case "BUTTON_CLICKED":
			return {
				message:"Button Clicked!"
			}
		case "MESSAGE_UPDATED":
			
			return {
				message: action.message
			}
		default:
			return state
	}
}
