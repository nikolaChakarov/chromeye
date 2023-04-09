const AppReducer = (state, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return { ...state, data: { ...action.payload } };
		case 'SET_MENU_HEIGHT':
			return { ...state, topMenuHeight: action.payload };
		case 'MENU_CLICK':
			return { ...state, menuClick: !state.menuClick };
		default:
			return state;
	}
};

export default AppReducer;
