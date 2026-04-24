const Modal = ({children, isOpen, setModalOpen}) => {
    if(!isOpen) return null;
    return <>{children}</>;
};

export default Modal;