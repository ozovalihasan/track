import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import { secondColor, thirdColor, fourthColor } from '../styleVariables';

const YourProgress = ({ pieces }) => {
  const data = percent => ({
    labels: ['Completed', 'Uncompleted'],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: [
          thirdColor,
          fourthColor,
        ],
        hoverBackgroundColor: [thirdColor],
        borderColor: [
          thirdColor,
          fourthColor,
        ],

      },
    ],
  });

  const options = {
    animation: {
      animateScale: true,
      //   animateRotate: true,
    },
    hover: false,
    maintainAspectRatio: true,
    legend: { display: false },
    centerText: {
      display: true,
      text: '90%',
    },
    responsive: true,
    tooltips: {
    },
    cutoutPercentage: 90,
  };

  return (
    <div>

      {pieces.map(piece => (
        <OnePiece key={piece.id}>
          <div>
            {piece.name}
          </div>
          {piece.percentageTakenTimes.map(
            percentage => (
              <DoughnutContainer key={uuid()}>
                <Doughnut
                  data={data(percentage)}
                  options={options}
                  width="20"
                  height="20"
                />
              </DoughnutContainer>
            ),
          )}
        </OnePiece>
      ))}
    </div>
  );
};

YourProgress.propTypes = {
  pieces: PropTypes.arrayOf().isRequired,
};

const OnePiece = styled.div`
width: 100%;
display: flex;
`;
const DoughnutContainer = styled.div`
margin: 10px;
padding: 10px;
width: 100%;
display: flex;
background-color: ${secondColor};
`;

export default YourProgress;
