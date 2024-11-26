const authActions = {
	AUTH: "AUTH",
	LOGOUT: "LOGOUT",
};

const postActions = {
	COMMENT: "COMMENT",
	CREATE: "CREATE",
	UPDATE: "UPDATE",
	DELETE: "DELETE",
	FETCH_ALL: "FETCH_ALL",
	FETCH_POST: "FETCH_POST",
	LIKE: "LIKE",
	SEARCH: "SEARCH",
	SORT: "SORT",
};

const loadingActions = {
	START: "START",
	STOP: "STOP",
};

export { authActions, loadingActions, postActions };
