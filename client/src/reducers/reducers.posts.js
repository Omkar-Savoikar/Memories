const reducer = (posts = [], action) => {
	//posts is the state
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			return [...posts, action.payload];
		default:
			return posts;
	}
};

export default reducer;
