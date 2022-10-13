import Filter from "../components/Filter";
import HotelList from "../components/HotelList";
import CreateHotel from "../components/CreateHotel";
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Filter />
        <CreateHotel />
      </div>

      <HotelList />
    </div>
  );
};

export default Home;
