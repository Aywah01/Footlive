import React from "react";

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

export default Alert;
