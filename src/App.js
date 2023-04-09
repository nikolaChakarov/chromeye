import { useRef, useEffect, useContext } from 'react';
import { DataContext } from './components/context/data-context';
import styled from 'styled-components';
import MainMenu from './components/main-menu/main-menu';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Blog from './components/blog/blog';
import Agency from './components/agency/agency';
import Contact from './components/contact/contact';
import FooterMenu from './components/footer-menu/footer-menu';
import { data as initData } from './data';

const App = () => {
	const { dispatch, topMenuHeight } = useContext(DataContext);
	const mainMenuRef = useRef(null);

	useEffect(() => {
		dispatch({
			type: 'GET_DATA',
			payload: initData,
		});
	}, [dispatch]);

	useEffect(() => {
		const domElHeight = mainMenuRef.current.offsetHeight;
		dispatch({
			type: 'SET_MENU_HEIGHT',
			payload: domElHeight,
		});
	}, [dispatch, topMenuHeight]);

	return (
		<AppWrapper>
			<MainMenu ref={mainMenuRef} />
			<Hero />
			<Services />
			<Blog />
			<Agency />
			<Contact />
			<FooterMenu />
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

export default App;
