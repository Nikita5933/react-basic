import classes from './Modal.module.css';

function Modal(props, {onClose}) {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onClose} />
            <dialog open className={classes.modal}>{props.children}</dialog>

        </>
    );
}

export default Modal;