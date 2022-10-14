import { ButtonAction } from "./styled-component/form/buttons";
import deleteIcon from "../assets/image/svg/deleteMain.svg";
import editIcon from "../assets/image/svg/editMain.svg";
import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteChain, onEditModeChain } from "../store/slices/chainsSlice";
import { ChainCardType } from "../types";

const ChainCard = ({ chain }: ChainCardType) => {
  const { name, id } = chain;

  const dispatch = useAppDispatch();

  return (
    <div className="chainCard">
      <div className="chainCard__name"> {name} </div>
      <div className="chainCard__btnCon">
        {" "}
        <ButtonAction onClick={() => dispatch(deleteChain(id))}>
          <img src={deleteIcon} alt="Delete Icon" />
        </ButtonAction>
        <ButtonAction onClick={() => dispatch(onEditModeChain(id))}>
          <img src={editIcon} alt="Edit Icon" />
        </ButtonAction>{" "}
      </div>
    </div>
  );
};

export default ChainCard;
