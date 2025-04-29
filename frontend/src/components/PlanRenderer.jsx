// components/PlanRenderer.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const PlanRenderer = ({ markdownData }) => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{markdownData}</ReactMarkdown>
    </div>
  );
};

PlanRenderer.propTypes = {
  markdownData: PropTypes.string.isRequired,
};

export default PlanRenderer;
