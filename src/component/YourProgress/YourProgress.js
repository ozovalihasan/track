import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import * as color from '../styleVariables';

const YourProgress = ({ pieces }) => {
  const data = piece => {
    const percentArray = piece.percentageTakenTimes.map(
      percent => ((percent > 100) ? 100 : percent),
    );
    const titleDay = ['Today', 'Yesterday', 'Previous Day'];
    const titleWeek = ['This Week', 'Last Week', 'Previous Week'];

    const timeNames = (piece.frequency_time === 86400 ? titleDay : titleWeek);

    const datasets = piece.percentageTakenTimes.map((_, index) => ({
      label: timeNames[index],
      labels: ['Completed', 'Uncompleted'],
      data: [percentArray[index], 100 - percentArray[index]],
      backgroundColor: [
        color.thirdColor,
        color.fourthColor,
      ],
      hoverBackgroundColor: [color.thirdColor],
    }));
    return { datasets };
  };

  const options = {
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000,
    },
    rotation: 1.25 * Math.PI,
    circumference: 0.75 * Math.PI,
    hover: false,
    maintainAspectRatio: true,
    responsive: true,
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const { index } = tooltipItem;
          return `${dataset.label} ${dataset.labels[index]}: ${dataset.data[index]}`;
        },
      },
    },
    cutoutPercentage: 40,
  };

  return (
    <Main>
      {pieces.map(piece => (
        <OnePieceContainer key={piece.id}>

          <OnePiece>
            <Doughnut
              data={data(piece)}
              options={options}
            />
            <PieceTitle>
              {piece.name}
            </PieceTitle>
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
  text-align: center;
  background-color: ${color.fifthColor};
`;

const OnePieceContainer = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

const OnePiece = styled.div`
  overflow: scroll;
  display: grid;
  grid-template-columns: 200px 150px 100px;
  position: relative;
`;

const PieceTitle = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  padding: 10px;
`;

export default YourProgress;
