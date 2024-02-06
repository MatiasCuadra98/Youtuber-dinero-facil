/* eslint-disable react/prop-types */const Button = ({ styles }) => (
<button 
    type="button" 
    className={`flex justify-center items-center gap-2 w-40 h-14 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:shadow-xl hover:shadow-blue-500 transform hover:scale-105 duration-300 hover:from-blue-600 hover:to-blue-400 ${styles}`}
  >
    <span>
      Get Started
    </span>
  </button>
);

export default Button;  