import { useContext, useEffect, useState, forwardRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { DataContext } from '../context/data-context';
import styled from 'styled-components';
import Button from '../button/button';

import { ReactComponent as Logo } from '../../assets/chromeye_logo_small_v1.svg';

const MainMenu = forwardRef((props, ref) => {
	const { data, topMenuHeight, dispatch } = useContext(DataContext);
	const [button, setButton] = useState({});
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		const btn = data?.main_menu.find((el) => el.order === 6);
		if (btn) setButton({ ...btn });
	}, [data]);

	useEffect(() => {
		if (data) {
			const temp = JSON.parse(JSON.stringify(data));
			const sorted = temp.main_menu.sort((x, y) => x.order - y.order);
			setMenuItems(sorted);
		}
	}, [data]);

	const scrollWidthOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -topMenuHeight;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};

	const handleClick = () => {
		dispatch({ type: 'MENU_CLICK' });
	};

	return (
		<MainMenuWrapper ref={ref}>
			<div className='mm-inner'>
				<div className='logo'>
					<Logo />
				</div>
				<div className='menu-items'>
					{menuItems.map((el, i) =>
						el.order === 6 ? null : el.order === 7 ? null : (
							<HashLink
								key={i}
								className='main-menu-item'
								to={el.url}
								scroll={scrollWidthOffset}
								onClick={handleClick}
							>
								{el.name}
							</HashLink>
						)
					)}

					<HashLink to={button.url}>
						<Button bgColor='darkGray'>{button.name}</Button>
					</HashLink>
				</div>
			</div>
		</MainMenuWrapper>
	);
});

const MainMenuWrapper = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	position: fixed;
	width: 100%;
	background: #fff;
	z-index: 10;

	.mm-inner {
		padding: 0 2rem;
		max-width: var(--max-width-desktop);
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.logo {
			display: flex;

			svg {
				max-width: 23rem;
				width: 100%;
				height: auto;
			}
		}

		.menu-items {
			display: flex;
			align-items: center;
			gap: 5.6rem;
		}

		a:not(.main-menu-item) {
			color: #fff;
		}

		a.main-menu-item {
			font-weight: 500;
			font-size: 2rem;
			line-height: 3rem;
			text-transform: uppercase;
			color: var(--black);
		}
	}
`;

export default MainMenu;
