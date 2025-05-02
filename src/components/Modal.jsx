import classes from './Modal.module.css';
import {useNavigate} from "react-router-dom";

function Modal(props) {
    const navigate = useNavigate();
    function handleClose() {
        navigate("/");
    }
    return (
        <>
            <div className={classes.backdrop} onClick={handleClose} />
            <dialog open className={classes.modal}>{props.children}</dialog>

        </>
    );
}

export default Modal;