import Modal from 'react-modal';
import { JSX } from 'react/jsx-runtime';

const CustomModal = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<Modal.Props>,
) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default CustomModal;
