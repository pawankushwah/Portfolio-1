import { useState } from 'react';

interface props {
  type: "success" | "error",
  message: string
}

export default function Alert({ type, message }:props):any {
  const [visible, setVisible] = useState(true);

  const closeAlert = () => {
    setVisible(false);
  }
  };

  return (
    visible && (
      <div
        className={`${
          type === 'success' ? 'bg-green-200' : 'bg-red-200'
        } border-l-4 border-solid border ${
          type === 'success' ? 'border-green-500' : 'border-red-500'
        } p-4 rounded-lg shadow-md mb-4`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            {type === 'success' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">{message}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                onClick={closeAlert}
                className={`inline-flex rounded-md p-1.5 text-${type === 'success' ? 'green' : 'red'}-500 hover:bg-${type === 'success' ? 'green' : 'red'}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${type === 'success' ? 'green' : 'red'}-500`}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.293a1 1 0 111.414-1.414L10 8.586l4.293-4.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  )
};
