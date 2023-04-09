import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './app-reducer';
import { data as initData } from '../../data';

export const DataContext = createContext({
	data: {},
	topMenuHeight: 0,
	menuClick: false,
});

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initData);

	return (
		<DataContext.Provider
			value={{
				data: state.data,
				topMenuHeight: state.topMenuHeight,
				menuClick: state.menuClick,
				dispatch,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
