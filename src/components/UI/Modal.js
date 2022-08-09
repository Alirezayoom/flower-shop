import { Fragment } from "react"
import  ReactDOM from "react-dom"

const Backdrop = (props) => {
    return <div className="bg-black opacity-70 fixed top-0 left-0  w-[100%] h-[100%] z-40" onClick={props.onHide}/>
}

const ModalOverlay = props => {
    return <div className="md:w-[60%] w-[90%]  max-h-[70%]  overflow-y-auto md:left-[20%] left-[5%] h-auto fixed bg-white mx-auto rounded-xl top-[15vh] items-center z-50">{props.children}</div>
}


const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>)
}

export default Modal;