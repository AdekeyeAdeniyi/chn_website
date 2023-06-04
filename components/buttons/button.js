const Button = ({ title, color, bgColor, smWidth, mdWidth }) => {
  return (
    <button
      className={`${color} ${bgColor} ${smWidth} ${mdWidth} inline-flex justify-center items-center uppercase text-base h-9 border border-white rounded-[2.5rem] w-full md:text-xl md:h-14`}
    >
      {title}
    </button>
  );
};

export default Button;
