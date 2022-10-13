import { Button } from "./styled-component/form/buttons";
import filterIcon from "../assets/image/svg/filter.svg";
import { Menu, MenuItem } from "@szhsin/react-menu";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { filter } from "../store/slices/hotelsSlice";

const Filter = () => {
  const [chains, setChains] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChains((curr) => [...curr, e.target.name]);
    } else {
      let newChain = chains.filter((chain) => chain !== e.target.name);
      setChains(newChain);
    }
  };

  useEffect(() => {
    dispatch(filter(chains));
  }, [chains, dispatch]);

  return (
    <div className="filter">
      <Menu
        menuButton={
          <Button width="18rem">
            <img src={filterIcon} alt="add icon" /> filter by Chain
          </Button>
        }
        transition
      >
        <div className="filter__main">
          <div className="filter__main__btnCon">
            <Button small="true" width="12rem">
              manage chains
            </Button>
          </div>
          <div className="filter__main__form">
            <div className="filter__main__form__inputCon">
              <input
                onChange={handelChange}
                type="checkbox"
                id="hilton"
                name="Hilton"
              />
              <label htmlFor="hilton"> Hilton </label>
            </div>
            <div className="filter__main__form__inputCon">
              <input
                onChange={handelChange}
                type="checkbox"
                id="dfvs"
                name="dfvs"
              />
              <label htmlFor="hilton"> hfdsvg </label>
            </div>

            <div className="filter__main__form__btnCon">
              <MenuItem>
                <Button fill="true" width="10rem">
                  done
                </Button>
              </MenuItem>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Filter;
