import "./assets/scss/main.scss";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHooks";
import { incrementByAmount } from "./store/slices/hotelsSlice";

function App() {
  const count = useAppSelector((state) => state.hotels.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {count}
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>increase</button>
    </div>
  );
}

export default App;
