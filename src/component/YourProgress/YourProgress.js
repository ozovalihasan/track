import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import { thirdColor, fourthColor } from '../styleVariables';

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

  const titleDay = ['Today', 'Yesterday', 'Previous Day'];
  const titleWeek = ['This Week', 'Last Week', 'Previous Week'];

  return (
    <Main>

      {pieces.map(piece => (
        <OnePieceContainer key={piece.id}>
          <div>
            {piece.name}
          </div>
          <OnePiece>

            {piece.percentageTakenTimes.map(
              (percentage, index) => (
                <div key={uuid()}>

                  {piece.frequency_time === 86400 ? titleDay[index] : titleWeek[index] }
                  <DoughnutContainer>
                    <Doughnut
                      data={data(percentage)}
                      options={options}
                    />
                  </DoughnutContainer>
                </div>

              ),
            )}
          </OnePiece>

        </OnePieceContainer>
      ))}
    </Main>
  );
};

YourProgress.propTypes = {
  pieces: PropTypes.arrayOf().isRequired,
};

const Main = styled.div`
overflow: scroll;
`;

const OnePieceContainer = styled.div`
width: 100%;
// display: flex;
overflow: scroll;

`;

const OnePiece = styled.div`
  display: flex;
`;

const DoughnutContainer = styled.div`
margin: 10px;
padding: 10px;
width: 100%;
display: flex;
`;
// background-color: ${secondColor};

export default YourProgress;
