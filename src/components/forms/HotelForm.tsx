import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { createHotel, editHotel } from "../../store/slices/hotelsSlice";
import { InputErrorHotelType } from "../../types";
import { Button } from "../styled-component/form/buttons";
import { SelectField, TextField } from "../styled-component/form/textField";
import { v4 as uuidv4 } from "uuid";

export interface HotelFormType {
  closeModal: () => void;
}

const HotelForm = ({ closeModal }: HotelFormType) => {
  const [inputError, setInputError] = useState<InputErrorHotelType>({});
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [ranking, setRanking] = useState<number>(1);
  const [longitude, setLongitude] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [chain, setChain] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [indexNo, setIndexNo] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const editMode = useAppSelector((state) => state.hotels.editMode);
  const hotels = useAppSelector((state) => state.hotels.hotels);

  useEffect(() => {
    if (editMode.status) {
      let currHotel: any = hotels.filter(
        (hotel) => hotel.id === editMode.hotelId
      );
      const objIndex = hotels.findIndex((obj) => obj.id === editMode.hotelId);
      if (objIndex >= 0) setIndexNo(objIndex);

      if (currHotel[0].name) {
        setName(currHotel[0].name);
        setCountry(currHotel[0].country);
        setCity(currHotel[0].city);
        setRanking(currHotel[0].ranking);
        setAddress(currHotel[0].address);
        setChain(currHotel[0].chain);
        setImage(currHotel[0].image);
        setLongitude(currHotel[0].longitude);
        setLatitude(currHotel[0].latitude);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode.status]);

  const validate = () => {
    let nameError = "";
    let cityError = "";
    let countryError = "";
    let addressError = "";

    if (!name) {
      nameError = "name is required";
    }
    if (!city) {
      cityError = "city is required";
    }
    if (!country) {
      countryError = "country is required";
    }
    if (!address) {
      addressError = "address is required";
    }

    if (countryError || cityError || addressError || nameError) {
      setInputError((currError) => {
        return {
          ...currError,
          name: nameError,
          city: cityError,
          address: addressError,
          country: countryError,
        };
      });

      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkValidate = validate();

    if (checkValidate) {
      setInputError({});

      const data = {
        id: uuidv4(),
        name,
        country,
        city,
        ranking,
        longitude,
        latitude,
        address,
        chain,
        image,
      };

      const editData = {
        main: data,
        indexNo,
      };

      if (!editMode.status) {
        dispatch(createHotel(data));
      } else {
        dispatch(editHotel(editData));
      }
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hotelForm">
      <div className="hotelForm__inputCon">
        <TextField
          inputError={inputError.name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Name"
          value={name}
        />
        <TextField
          inputError={inputError.country}
          onChange={(e) => setCountry(e.target.value)}
          name="country"
          label="country"
          value={country}
        />
        <TextField
          inputError={inputError.city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          label="City"
          value={city}
        />
        <TextField
          inputError={inputError.address}
          onChange={(e) => setAddress(e.target.value)}
          name="address"
          label="Address"
          value={address}
        />
        <TextField
          inputError={inputError.longitude}
          onChange={(e) => setLongitude(e.target.value)}
          name="longitude"
          label="Longitude"
          value={longitude}
        />
        <TextField
          inputError={inputError.latitude}
          onChange={(e) => setLatitude(e.target.value)}
          name="latitude"
          label="Latitude"
          value={latitude}
        />
        <SelectField
          inputError={inputError.ranking}
          onChange={(e) => setRanking(parseInt(e.target.value))}
          name="ranking"
          label="Ranking"
          value={ranking}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </SelectField>
        <SelectField
          inputError={inputError.chain}
          onChange={(e) => setChain(e.target.value)}
          name="chain"
          label="Chain"
          value={chain}
        >
          <option value=""></option>
          <option value="Hilton">Hilton</option>
        </SelectField>
        <TextField
          inputError={inputError.image}
          onChange={(e) => setImage(e.target.value)}
          name="image"
          label="Image URL"
          value={image}
        />
      </div>

      <div className="hotelForm__btnCon">
        <Button type="submit" fill="true" width="25rem">
          {editMode.status ? "Edit" : "Create"} Hotel
        </Button>
      </div>
    </form>
  );
};

export default HotelForm;
