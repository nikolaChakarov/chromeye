import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/data-context';
import { HashLink } from 'react-router-hash-link';
import Button from '../button/button';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/chromeye_logo_small_v1.svg';
import facebook from '../../assets/Icons/chromeye_assignment_facebookicon_v1.svg';
import linkedin from '../../assets/Icons/chromeye_assignment_linkedinicon_v1.svg';
import twitter from '../../assets/Icons/chromeye_assignment_twittericon_v1.svg';

const FooterMenu = (props) => {
	const { data } = useContext(DataContext);
	const [footerData, setFooterData] = useState(null);

	const prepateData = () => {
		const dataCopy = JSON.parse(JSON.stringify(data));
		const menuItems = dataCopy.footer_menu.sort(
			(x, y) => x.order - y.order
		);
		const menuItemsFirstCol = menuItems.slice(0, 4);
		const menuItemsSecondCol = menuItems.slice(4);

		setFooterData({
			firstCol: menuItemsFirstCol,
			secondCol: menuItemsSecondCol,
			company: dataCopy.company_data,
		});
	};

	useEffect(() => {
		if (!data) return;
		prepateData();
	}, [data]);

	return (
		<FooterMenuWrapper id='contact'>
			<div className='footer-inner'>
				<div className='f-top'>
					<div className='logo'>
						<Logo />
					</div>
					<div className='btn-wrapper'>
						<HashLink to='/#contact'>
							<Button bgColor='darkGray'>request a call</Button>
						</HashLink>
					</div>
				</div>

				<div className='f-body'>
					<div className='col'>
						{footerData?.firstCol.map((el, i) => (
							<HashLink key={i} to={el.url}>
								{el.name}
							</HashLink>
						))}

						<p className='intro'>{footerData?.company?.intro}</p>
					</div>

					<div className='col'>
						{footerData?.secondCol.map((el, i) => (
							<HashLink key={i} to={el.url}>
								{el.name}
							</HashLink>
						))}
					</div>

					<div className='col'>
						<h3>Follow us:</h3>

						<div className='social-wrapper'>
							<HashLink
								to={footerData?.company?.social_media?.facebook}
								className='social-item'
							>
								<img src={facebook} alt='facebook__logo' />
							</HashLink>
							<HashLink
								to={footerData?.company?.social_media?.twitter}
								className='social-item'
							>
								<img src={twitter} alt='twitter__logo' />
							</HashLink>
							<HashLink
								to={footerData?.company?.social_media?.linkedin}
								className='social-item'
							>
								<img src={linkedin} alt='linkedin__logo' />
							</HashLink>
						</div>

						<h3>Contact</h3>
						<div className='address'>
							<p>{footerData?.company?.address}</p>
							<p>Phone: {footerData?.company?.phone}</p>
							<p>Web: {footerData?.company?.email}</p>
						</div>
					</div>
				</div>
			</div>
		</FooterMenuWrapper>
	);
};

const FooterMenuWrapper = styled.div`
	margin: 8.2rem 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	.footer-inner {
		width: 100%;
		padding: 0 2rem;
		max-width: var(--max-width-desktop);
		.f-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 6.6rem;

			.logo {
				display: flex;

				svg {
					max-width: 23rem;
					width: 100%;
					height: auto;
				}
			}
		}

		.f-body {
			display: flex;
			justify-content: space-between;

			.col {
				flex: 1;
				max-width: 28%;
				display: flex;
				flex-direction: column;
				gap: 3.2rem;
				color: var(--dark-gray);

				a {
					font-weight: 500;
					font-size: 2.4rem;
					line-height: 2.8rem;
					color: var(--dark-gray);
					align-self: flex-start;
				}

				.intro {
					font-weight: 400;
					font-size: 1.6rem;
					line-height: 2.4rem;
				}

				h3 {
					font-weight: 500;
					font-size: 2.4rem;
					line-height: 2.8rem;
				}

				.address {
					font-weight: 500;
					font-size: 1.6rem;
					line-height: 2.4rem;
					display: flex;
					flex-direction: column;
					gap: 0.2rem;
				}
			}

			.social-wrapper {
				display: flex;
				gap: 2rem;
			}
		}
	}
`;

export default FooterMenu;
