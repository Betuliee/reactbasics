import './Modal.css';
import CustomButton from '../CustomButton/CustomButton';

const Modal = ({setModalGoster}) => {
    return(
        <div className='modal-wrapper' onClick={()=> setModalGoster(false)}>
        <div className='modal'>
            <form>
                <label htmlFor="">Adinizi Giriniz</label>
                <input type="text" />
                <label htmlFor="">Soyadinizi Giriniz</label>
                <input type="text" />
                <CustomButton onClick={() => setModalGoster(false)} buttonTitle={'Kapat'} buttonColor={'red'} />
            </form>
        </div>
    </div>
    );
};

export default Modal;