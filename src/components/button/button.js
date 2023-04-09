import styled from 'styled-components';

const Button = (props) => {
	const { bgColor, children } = props;
	const colors = {
		white: '#fff',
		lightGray: '#ededed',
		darkGray: '#646464',
		black: '#000',
		darkBlue: '#1C73A8',
		lightBlue: '#00BAFF',
		green: '#0AE2C1',
	};

	return <StyledBtn bg={colors[bgColor]}>{children}</StyledBtn>;
};

const StyledBtn = styled.button`
	background: ${({ bg }) => bg};
	color: #fff;
	padding: 2.4rem 3.2rem;
	border-radius: 0.4rem;
	box-shadow: var(--shadow);
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 24px;
	text-transform: uppercase;
	transition: all 0.5s ease-in-out;

	&:hover {
		opacity: 0.8;
	}
`;

export default Button;
