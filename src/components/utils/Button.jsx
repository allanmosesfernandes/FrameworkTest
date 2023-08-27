/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

function Button(props) {
    const { text } = props;
    return (
      <button type="button" className="leading-tight flex justify-center items-center text-center w-[190px] h-[60px] text-white customBtn font-sora bg-buttonBlue px-[20px] py-[30px] hover:bg-buttonBlueHover transition duration-150 ease-out hover:ease-in">
        { text }
      </button>
    );
}

export default Button;
