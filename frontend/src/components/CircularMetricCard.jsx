import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const MetricCard = ({ title, value }) => {
  return (
    <div className="metric-card font-bold">
      <div className="relative w-62 h-62 mb-6">
        <CircularProgressbar
          value={value}
          text={`${value}`}
          styles={buildStyles({
            textSize: '1.25rem',
            pathColor: '#9089fc',
            textColor: '#424242',
            trailColor: 'rgba(100, 181, 246, 0.25)',
            pathTransition: 'stroke-dashoffset 0.5s ease 0s',
          })}
        />
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 bg-clip-text text-gray-800">
        {title}
      </h3>
    </div>
  );
};

MetricCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

export default MetricCard;
