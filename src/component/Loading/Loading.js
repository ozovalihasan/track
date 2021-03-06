import styled, { keyframes } from 'styled-components';
import { firstColor, secondColor } from '../styleVariables';

const Loading = () => (
  <MainLoading />
);

const spinAnimation = keyframes`
0% { transform: translate(-50%, -50%) rotate(0deg); }
100% { transform: translate(-50%, -50%)  rotate(360deg); }
`;

const MainLoading = styled.div`
z-index: 999;
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid ${firstColor};
border-bottom: 16px solid ${secondColor};
width: 120px;
height: 120px;
animation: ${spinAnimation} 2s linear infinite;
position: absolute;
left: 50%;
top: 50%;
`;

export default Loading;
