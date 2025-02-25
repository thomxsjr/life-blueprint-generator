import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const MetricCard = ({ title, value, color }) => {
  return (
    <div className="metric-card hover:translate-y-[-4px] hover:shadow-lg hover:shadow-white/5 transition-all duration-300">
      <div className="relative w-32 h-32 mb-6">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textSize: '1.25rem',
            pathColor: color,
            textColor: color,
            trailColor: 'rgba(255,255,255,0.1)',
            pathTransition: 'stroke-dashoffset 0.5s ease 0s',
          })}
        />
      </div>
      <h3 className="text-lg font-medium bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
  );
};

MetricCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  };

export default MetricCard;
