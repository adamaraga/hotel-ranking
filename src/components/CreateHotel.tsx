import { Button } from "./styled-component/form/buttons";
import addIcon from "../assets/image/svg/addMain.svg";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { modalCustomStyles } from "../assets/styles/customStyles";
import closeIcon from "../assets/image/svg/closeMain.svg";
import HotelForm from "./forms/HotelForm";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { offEditMode } from "../store/slices/hotelsSlice";

function CreateHotel() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const editMode = useAppSelector((state) => state.hotels.editMode);
  const dispatch = useAppDispatch();

  const openModal = (): void => {
    setIsOpen(true);
  };

  function closeModal(): void {
    setIsOpen(false);
    if (editMode.status) {
      dispatch(offEditMode());
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
    <div className="createHotel">
      {" "}
      <Button onClick={openModal} fill="true">
        <img src={addIcon} alt="filter icon" />
        Create Hotel
      </Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        contentLabel="Create Hotel Modal"
      >
        <div className="createHotel__main">
          <span className="createHotel__main__closeBtn" onClick={closeModal}>
            <img src={closeIcon} alt="" />
          </span>
          <h2>{editMode.status ? "Edit" : "Create"} Hotel</h2>

          <HotelForm closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default CreateHotel;
