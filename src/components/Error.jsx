export const Error = ({ message }) => {
  return (
    <div className="error-component">
      <p className="error-message">
        {message || 'Error: Failed to load data. Please try again later.'}
      </p>
    </div>
  );
};
