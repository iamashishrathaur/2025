const Popup = ({handleClose}) => {
  return (
    <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="alert"
          aria-live="assertive"
        >
          <div className="relative bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded shadow-lg w-11/12 max-w-md text-center">
            <button
              className="absolute top-0 right-2 text-green-700 font-bold focus:outline-none"
              onClick={() => handleClose(false)}
              aria-label="Close Success Message"
            >
              &times;
            </button>
            <strong className="font-bold">Success: </strong>
            <span>Your investment has been successfully recorded!</span>
          </div>
        </div>
  )
}

export default Popup