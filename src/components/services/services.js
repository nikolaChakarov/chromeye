import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/data-context';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import Button from '../button/button';

const Services = () => {
	const { data, menuClick } = useContext(DataContext);
	const [servicesData, setServicesData] = useState(null);
	const [itemClick, setItemClick] = useState({});

	const handleItemClick = (e) => {
		const item = e.currentTarget.dataset.name;
		setItemClick((prev) => ({ ...prev, [item]: !prev[item] }));
	};
	useEffect(() => {
		if (data) {
			setServicesData({ ...data.services });
		}
	}, [data]);

	useEffect(() => {
		setItemClick({});
	}, [menuClick]);

	return (
		<ServicesWrapper id='services'>
			{servicesData && (
				<div className='services-inner'>
					<h1>{servicesData.title}</h1>
					<p>{servicesData.description}</p>
					<div className='items'>
						{servicesData.items.map((el, i) => {
							const { title, description, icon } = el;
							return (
								<div className='item-wrapper' key={i}>
									<div className='item-controller'>
										<div className='img-wrapper'>
											<img src={icon} alt='icon' />
										</div>
										<h2>{title}</h2>
										<div
											className='icon-wrapper'
											onClick={handleItemClick}
											data-name={title}
										>
											{itemClick[title] ? (
												<span>-</span>
											) : (
												<span>&#65291;</span>
											)}
										</div>
									</div>

									{itemClick[title] && (
										<div className='info'>
											{description}
										</div>
									)}
								</div>
							);
						})}
					</div>
					<HashLink
						className='btn-wrapper'
						to={data.services.buttonUrl}
					>
						<Button bgColor='lightBlue'>
							{data.services.buttonLabel}
						</Button>
					</HashLink>
				</div>
			)}
		</ServicesWrapper>
	);
};

const ServicesWrapper = styled.div`
	display: flex;
	justify-content: center;

	.services-inner {
		margin-top: 9.6rem;
		padding: 0 2rem;
		max-width: var(--max-width-desktop);
		flex: 1;
		display: flex;
		flex-direction: column;

		h1 {
			text-align: center;
			font-weight: 700;
			font-size: 3.8rem;
			line-height: 4.2rem;
			margin-bottom: 3.2rem;
		}

		p {
			font-weight: 400;
			font-size: 1.8rem;
			line-height: 2.4rem;
			text-align: center;
			margin-bottom: 6.4rem;
			max-width: 70%;
			align-self: center;
		}

		.items {
			display: flex;
			justify-content: space-between;
			gap: 9rem;
			margin-bottom: 6.4rem;
		}

		.item-wrapper {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.item-controller {
			flex-grow: 1;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			align-items: center;
			gap: 2.2rem;

			h2 {
				font-weight: 700;
				font-size: 2.4rem;
				line-height: 2.8rem;
				text-align: center;
			}

			.img-wrapper {
				max-width: 5.9rem;
				img {
					width: 100%;
					height: auto;
				}
			}

			.icon-wrapper {
				/* max-width: 2.5rem;
				svg {
					width: 100%;
					height: auto;
				} */
				span {
					font-size: 4rem;
					display: block;
					color: var(--dark-gray);
					font-weight: bold;
					cursor: pointer;
				}
			}
		}

		.info {
			font-weight: 400;
			font-size: 1.6rem;
			line-height: 2.4rem;
			text-align: center;
		}

		.btn-wrapper {
			align-self: center;
		}
	}
`;

export default Services;
