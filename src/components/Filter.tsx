import { Button } from "./styled-component/form/buttons";
import filterIcon from "../assets/image/svg/filter.svg";
import { Menu, MenuItem } from "@szhsin/react-menu";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filter } from "../store/slices/hotelsSlice";
import { Link } from "react-router-dom";

const Filter = () => {
  const [chains, setChains] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const chainsData = useAppSelector((state) => state.chains.chains);

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
            <Link to="/chains">
              <Button small="true" width="12rem">
                {chainsData.length > 0 ? "manage" : "create"} chains
              </Button>
            </Link>
          </div>
          <div className="filter__main__form">
            {chainsData.length > 0 ? (
              chainsData.map((chain) => {
                return (
                  <div key={chain.id} className="filter__main__form__inputCon">
                    <input
                      onChange={handelChange}
                      type="checkbox"
                      id={chain.name}
                      name={chain.name}
                    />
                    <label htmlFor={chain.name}> {chain.name} </label>
                  </div>
                );
              })
            ) : (
              <div style={{ margin: "1rem" }} className="noData">
                No chain
              </div>
            )}
            {chainsData.length > 0 && (
              <div className="filter__main__form__btnCon">
                <MenuItem>
                  <Button fill="true" width="10rem">
                    done
                  </Button>
                </MenuItem>
              </div>
            )}
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Filter;
