import { useContext } from 'react';
import { DataContext } from '../context/data-context';
import styled from 'styled-components';
import Button from '../button/button';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
	const { topMenuHeight, data } = useContext(DataContext);
	return (
		<HeroWrapper offset={topMenuHeight}>
			{data && (
				<div className='hero-inner'>
					<div className='info'>
						<h1>{data.hero.title}</h1>
						<p>{data.hero.description}</p>
						<div className='btn-wrapper'>
							<HashLink to={data.hero.buttonUrl}>
								<Button bgColor='lightBlue'>
									{data.hero.buttonLabel}
								</Button>
							</HashLink>
						</div>
					</div>
					<div className='img-wrapper'>
						<img src={data.hero.image} alt='banner__image' />
					</div>
				</div>
			)}
		</HeroWrapper>
	);
};

const HeroWrapper = styled.div`
	${({ offset }) => `height: calc(100vh - ${offset}px)`};
	${({ offset }) => `margin-top: calc(${offset}px)`};
	display: flex;
	justify-content: center;
	background: linear-gradient(
		82.02deg,
		rgba(253, 192, 183, 0.8) 0.98%,
		rgba(210, 204, 255, 0.8) 50.91%,
		rgba(107, 180, 253, 0.8) 100%
	);

	.hero-inner {
		padding: 0 2rem;
		max-width: var(--max-width-desktop);
		flex: 1;
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;

		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 3.2rem;

			h1 {
				font-weight: 700;
				font-size: 4.4rem;
				line-height: 4.8rem;
			}
			p {
				font-weight: 400;
				font-size: 1.8rem;
				line-height: 2.4rem;
			}

			a {
				color: #fff;
				font-weight: 500;
				font-size: 1.8rem;
				line-height: 2.4rem;
			}
		}

		.img-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			img {
				width: 100%;
				max-width: 67rem;
				height: auto;
			}
		}
	}
`;

export default Hero;
