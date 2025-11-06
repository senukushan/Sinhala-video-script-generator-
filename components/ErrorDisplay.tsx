
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center text-center p-8 bg-red-900/30 border-2 border-red-500 rounded-2xl">
      <div className="flex-shrink-0 text-red-400 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-red-300">An Error Occurred</h3>
        <p className="mt-1 text-red-300">{message}</p>
      </div>
    </div>
  );
};
