import './CustomButton.css';

function CustomButton({buttonTitle, buttonColor, onClick}){

    const stil = { backgroundColor:buttonColor};
    return(
        <button onClick={onClick} className="custom-button" style={stil}>{buttonTitle}</button>
    );
};

export default CustomButton;