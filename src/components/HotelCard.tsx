import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import deleteIcon from "../assets/image/svg/deleteMain.svg";
import editIcon from "../assets/image/svg/editMain.svg";
import hotelIcon from "../assets/image/svg/hotelMain.svg";
import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteHotel, onEditMode } from "../store/slices/hotelsSlice";
import { HotelCardType } from "../types";

const HotelCard = ({ hotel }: HotelCardType) => {
  const { name, address, chain, ranking, image, id, country, city } = hotel;

  const dispatch = useAppDispatch();

  return (
    <div className="hotelCard">
      <div className="hotelCard__imgCon">
        <img src={image ? image : hotelIcon} alt="" />
      </div>

      <div className="hotelCard__main">
        <div className="hotelCard__info">
          <h3 className="hotelCard__info__title">{name}</h3>
          <div className="hotelCard__info__country">{`${city}, ${country}`}</div>
          <div>
            {chain && <span className="hotelCard__info__chain">{chain}</span>}
          </div>
          <div className="hotelCard__info__address">
            {address} <Link to={`/map/${id}`}>view location on map</Link>
          </div>

          <div className="hotelCard__info__ratingCon">
            <Rating size={20} initialValue={ranking} iconsCount={5} readonly />
          </div>
        </div>
        <div className="hotelCard__btn">
          <span
            className="hotelCard__btn__item"
            onClick={() => dispatch(deleteHotel(id))}
          >
            <img src={deleteIcon} alt="Delete Icon" />
          </span>
          <span
            onClick={() => dispatch(onEditMode(id))}
            className="hotelCard__btn__item "
          >
            <img src={editIcon} alt="Edit Icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
