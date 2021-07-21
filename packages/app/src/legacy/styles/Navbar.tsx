import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { queries } from './mediaQueries';
import theme from '../../components/theme';

export const title = css`
	color: white;
	font-family: Monoton, cursive;
	font-size: 2rem;
	text-align: center;
	${queries.xLarge`
		text-align: left;
	`};
	${queries.medium`
		text-align: center;
		margin-bottom: 50px;
	`};
`;

const Navbar = styled.nav<{full: boolean}>`
	background: ${theme.colors.secondaryColor};
	left: 0;
	width: 400px;
	padding: 8px;
	height: 100vh;
	position: fixed;
	z-index: 3;
	${({ full }) => queries.xLarge`
		width: 100%;
		height: ${full ? '100vh' : 'auto'};
		display: flex;
		flex-direction: column;
		margin-top: 50px;
	`};
`;

export default Navbar;
