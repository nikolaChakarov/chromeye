import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/data-context';
import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../../assets/Icons/chromeye_assignment_arrowdown_v1.svg';

import agenyImg from '../../assets/agencyservices-images/chromeye_assignment_webassets_v1.png';

const Agency = () => {
	const { data, menuClick } = useContext(DataContext);
	const [itemClick, setItemClick] = useState({});

	const handleItemClick = (e) => {
		const item = e.currentTarget.dataset.name;
		setItemClick((prev) => ({ [item]: !prev[item] }));
	};

	useEffect(() => {
		setItemClick({});
	}, [menuClick]);

	return (
		<AgencyWrapper id='agency'>
			<div className='agency-inner'>
				{data && (
					<h1 className='agency-title'>
						{data.agency_services.title}
					</h1>
				)}

				<div className='agency-info'>
					<div className='agency-items'>
						{data &&
							data.agency_services.items.map((el, i) => (
								<div
									key={i}
									className={`${
										itemClick[el.title]
											? 'agency-item-wrapper open'
											: 'agency-item-wrapper'
									}`}
								>
									<div
										className={`${
											i <
											data.agency_services.items.length -
												1
												? 'top'
												: 'top last'
										}`}
										data-name={el.title}
										onClick={handleItemClick}
									>
										<div className='item-title'>
											{el.title}
										</div>
										<ArrowDown
											className={`${
												itemClick[el.title]
													? 'arrow-img up'
													: 'arrow-img'
											}`}
										/>
									</div>

									{itemClick[el.title] && (
										<div className='item-description'>
											{el.description}
										</div>
									)}
								</div>
							))}
					</div>
					<div className='agency-img'>
						<img src={agenyImg} alt='agency__image' />
					</div>
				</div>
			</div>
		</AgencyWrapper>
	);
};

const AgencyWrapper = styled.div`
	margin: 6.2rem 0 12.6rem;
	display: flex;
	justify-content: center;

	.agency-inner {
		padding: 0 2rem;
		max-width: 62%;
		flex: 1;
		display: flex;
		flex-direction: column;

		.agency-title {
			text-align: center;
			font-weight: 700;
			font-size: 3.8rem;
			line-height: 4.2rem;
			margin-bottom: 6.4rem;
		}

		.agency-info {
			display: flex;
			justify-content: space-between;
			gap: 11rem;
			position: relative;
		}

		.agency-items {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.agency-item-wrapper {
			display: flex;
			flex-direction: column;

			.top {
				cursor: pointer;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-top: 0.2rem solid var(--light-gray);
				padding: 2.4rem 3.4rem;
				font-weight: 500;
				font-size: 1.8rem;
				line-height: 2.4rem;

				.arrow-img {
					width: 2.6rem;
					transition: all 0.3s ease-in-out;
				}

				.arrow-img.up {
					transform: rotate(180deg);
				}
			}

			.top.last {
				border-bottom: 0.2rem solid var(--light-gray);
			}
		}

		.agency-img {
			max-width: 35.6rem;
			display: flex;
			img {
				width: 100%;
				height: auto;
				align-self: center;
			}
		}

		.agency-item-wrapper.open {
			background: var(--light-gray);
			.item-title {
				color: var(--dark-blue);
			}
		}

		.item-description {
			padding: 2.4rem 3rem;
			font-weight: 400;
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
	}
`;

export default Agency;
