import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import addIcon from "../assets/image/svg/addMain.svg";
import Modal from "react-modal";
import { modalCustomStyles } from "../assets/styles/customStyles";
import closeIcon from "../assets/image/svg/closeMain.svg";
import { Button } from "./styled-component/form/buttons";
import ChainForm from "./forms/ChainForm";
import { offEditModeChain } from "../store/slices/chainsSlice";

const CreateChain = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const editMode = useAppSelector((state) => state.chains.editMode);
  const dispatch = useAppDispatch();

  const openModal = (): void => {
    setIsOpen(true);
  };

  function closeModal(): void {
    setIsOpen(false);
    if (editMode.status) {
      dispatch(offEditModeChain());
    }
  }

  useEffect(() => {
    if (editMode.status) {
      openModal();
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode.status]);

  return (
    <div className="createChain">
      <Button onClick={openModal} fill="true">
        <img src={addIcon} alt="filter icon" />
        Create Chain
      </Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        contentLabel="Create chain Modal"
      >
        <div className="createHotel__main">
          <span className="createHotel__main__closeBtn" onClick={closeModal}>
            <img src={closeIcon} alt="" />
          </span>
          <h2>{editMode.status ? "Edit" : "Create"} Chain</h2>

          <ChainForm closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default CreateChain;
