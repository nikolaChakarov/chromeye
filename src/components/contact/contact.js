import styled from 'styled-components';

import background from '../../assets/chromeye_assignment_desktopbgbanner_v1.jpg';
import { HashLink } from 'react-router-hash-link';
import Button from '../button/button';

const Contact = () => {
	return (
		<ContactWrapper id='about' bg={background}>
			<div className='contact-inner'>
				<h1>Ready to Get started</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Tristique sed scelerisque arcu scelerisque ultricies
					habitant ac semper lorem.
				</p>
				<div className='btn-wrapper'>
					<HashLink to='/#contact'>
						<Button bgColor='darkGray'>request a call</Button>
					</HashLink>
				</div>
			</div>
		</ContactWrapper>
	);
};

const ContactWrapper = styled.div`
	height: 57rem;
	${({ bg }) => `background-image: url(${bg})`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.contact-inner {
		position: absolute;
		width: 100%;
		max-width: 46%;
		margin: auto;
		display: flex;
		flex-direction: column;
		background: #fff;
		justify-content: center;
		align-items: center;
		border-radius: 1rem;
		padding: 3rem 7.6rem;

		h1 {
			text-align: center;
			font-weight: 700;
			font-size: 4.4rem;
			line-height: 4.8rem;
			color: var(--dark-blue);
			margin-bottom: 1.6rem;
		}

		p {
			text-align: center;
			color: var(--dark-blue);
			margin-bottom: 3.2rem;
		}
	}
`;

export default Contact;
