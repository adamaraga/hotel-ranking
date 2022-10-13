import HotelCard from "./HotelCard";
import { useAppSelector } from "../hooks/reduxHooks";
import { HotelType } from "../types";
import { useEffect, useState } from "react";

const HotelList = () => {
  const [hotelsMain, setHotelsMain] = useState<HotelType[] | []>([]);

  const hotels = useAppSelector((state) => state.hotels.hotels);
  const filter = useAppSelector((state) => state.hotels.filter);

  useEffect(() => {
    if (filter.length < 1) {
      setHotelsMain(hotels);
    } else {
      let newHotels: HotelType[] | [] = [];

      for (let i = 0; i < filter.length; i++) {
        let filteredData = hotels.filter((hotel) => hotel.chain === filter[i]);
        newHotels = [...newHotels, ...filteredData];
      }

      setHotelsMain(newHotels);
    }
  }, [hotels, filter]);

  return (
    <div>
      {hotelsMain.length > 0 ? (
        <div className="hotelList">
          {hotelsMain.map((hotel) => {
            return <HotelCard key={hotel.id} hotel={hotel} />;
          })}
        </div>
      ) : (
        <div className="noData">No Hotel</div>
      )}
    </div>
  );
};

export default HotelList;
