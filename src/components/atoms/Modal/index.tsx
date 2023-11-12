import React from 'react';
import {
  styButtonWrapper,
  styMidIcon,
  styModal,
  styModalClose,
  styModalContent,
  styOverlay,
  textDetail,
} from './styles';
import Button from '../Button';
import Gap from '../Gap';
import { IoCloseCircleOutline, IoCloseSharp } from 'react-icons/io5';
import { colors } from '../../../assets';

interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  setCancel: () => void;
  setApprove: () => void;
  isDelete?: boolean;
}

const Modal = (props: ModalProps) => {
  // const [show, setShow] = useState(props.show);
  if (props.isDelete) {
    return (
      <div className={styModal(props.show)}>
        <div
          className={styOverlay}
          onClick={() => {
            props.setCancel();
          }}
        />
        <div className={styModalContent}>
          <IoCloseSharp
            fontSize={28}
            className={styModalClose}
            onClick={() => {
              props.setCancel();
            }}
          />
          <div className={styMidIcon}>
            <IoCloseCircleOutline
              fontSize={120}
              color={colors.dangerColorHover}
            />
            <h4 className={textDetail}>
              Do you really want to delete these records? This process cannot be
              undone.
            </h4>
          </div>
          <div className={styButtonWrapper}>
            <Button
              onClick={() => {
                props.setCancel();
              }}
              isSecondary
            >
              Cancel
            </Button>
            <Gap width={40} />
            <Button
              onClick={() => {
                props.setApprove();
              }}
              reverse
              isDelete
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styModal(props.show)} data-testid="modal">
      <div
        className={styOverlay}
        onClick={() => {
          props.setCancel();
        }}
      />
      <div className={styModalContent}>
        {props.children}
        <div className={styButtonWrapper}>
          <Button>Cancel</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
