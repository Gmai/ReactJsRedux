 const ajaxCaller = store => next => action => {
	 
	 switch (action.type) {
		 case "BUTTON_CLICKED":
			 $.ajax({
				 method: 'get',
				 url: '/React/GetMessage'
			 }).done(function (response) {
				 store.dispatch({
					 type: "MESSAGE_UPDATED",
					 message:response.message
				 });
			 });
		 default:
			 break;
	 };
	 return next(action);
}

 export default ajaxCaller;