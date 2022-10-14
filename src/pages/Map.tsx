import MapGL, { Popup, NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useParams } from "react-router-dom";
import { HotelType } from "../types";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { Rating } from "react-simple-star-rating";
import hotelIcon from "../assets/image/svg/hotelMain.svg";

const Map = () => {
  const [hotel, setHotel] = useState<HotelType | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setlatitude] = useState<number | null>(null);

  const hotels = useAppSelector((state) => state.hotels.hotels);

  const { id } = useParams();

  console.log("first", longitude, latitude);

  useEffect(() => {
    if (id && hotels.length > 0) {
      const newHotel: HotelType[] | [] = hotels.filter(
        (hotel) => hotel.id === id
      );
      setHotel(newHotel[0]);
      setLongitude(
        newHotel[0].longitude ? parseInt(newHotel[0].longitude) : null
      );
      setlatitude(newHotel[0].latitude ? parseInt(newHotel[0].latitude) : null);
    }
  }, [id, hotels]);

  //   const mapApiKey = process.env.REACT_APP_MAP_API_KEY;
  const mapApiKey =
    "pk.eyJ1IjoiYWRhbWFyYWdhIiwiYSI6ImNsN3M1ejJ6bzA1emozb2p4dDhrdW82djUifQ.a9MeR7njAMxHfxqRrns-5A";
  return (
    <div className="map">
      {!hotel ? (
        <div className="noData">Invalid ID</div>
      ) : longitude &&
        longitude >= -180 &&
        longitude <= 180 &&
        latitude &&
        latitude >= -90 &&
        latitude <= 90 ? (
        <div>
          <h2 className="map__title">{hotel.name}</h2>
          <p className="map__info">
            {hotel.city}, {hotel.country}
          </p>
          <p className="map__info">{hotel.address}</p>
          <Rating
            size={20}
            initialValue={hotel.ranking}
            iconsCount={5}
            readonly
          />

          <MapGL
            mapboxAccessToken={mapApiKey}
            scrollZoom={false}
            initialViewState={{
              longitude,
              latitude,
              zoom: 8,
              pitch: 20,
            }}
            style={{ width: "100%", height: 450, borderRadius: "2rem" }}
            mapStyle={"mapbox://styles/mapbox/streets-v9"}
          >
            <Marker longitude={longitude} latitude={latitude} anchor="bottom">
              <svg
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path
                  fill="rgba(0, 0, 0, 0.316)"
                  d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z"
                />
                <path
                  fill="#fc6b43"
                  d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"
                />
              </svg>
            </Marker>
            <Popup
              style={{ width: "13rem", minHeight: "8rem" }}
              anchor="top"
              longitude={longitude}
              latitude={latitude}
            >
              <img
                className="map__maker__img"
                src={hotel.image ? hotel.image : hotelIcon}
                alt=""
              />
              <span className="map__maker__title">{hotel.name}</span>
            </Popup>
            <NavigationControl position="top-left" />
          </MapGL>
        </div>
      ) : (
        <div className="noData">Invalid Longitude and Latitude</div>
      )}
    </div>
  );
};

export default Map;
