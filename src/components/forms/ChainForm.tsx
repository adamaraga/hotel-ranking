import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { InputErrorChainType } from "../../types";
import { Button } from "../styled-component/form/buttons";
import { TextField } from "../styled-component/form/textField";
import { v4 as uuidv4 } from "uuid";
import { createChain, editChain } from "../../store/slices/chainsSlice";

export interface ChainFormType {
  closeModal: () => void;
}

const ChainForm = ({ closeModal }: ChainFormType) => {
  const [inputError, setInputError] = useState<InputErrorChainType>({});
  const [name, setName] = useState<string>("");
  const [indexNo, setIndexNo] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const editMode = useAppSelector((state) => state.chains.editMode);
  const chains = useAppSelector((state) => state.chains.chains);

  useEffect(() => {
    if (editMode.status) {
      let currChain: any = chains.filter(
        (chain) => chain.id === editMode.chainId
      );
      const objIndex = chains.findIndex((obj) => obj.id === editMode.chainId);
      if (objIndex >= 0) setIndexNo(objIndex);

      if (currChain[0].name) {
        setName(currChain[0].name);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode.status]);

  const validate = () => {
    let nameError = "";

    if (!name) {
      nameError = "name is required";
    }

    if (nameError) {
      setInputError({
        name: nameError,
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
      };

      const editData = {
        main: data,
        indexNo,
      };

      if (!editMode.status) {
        dispatch(createChain(data));
      } else {
        dispatch(editChain(editData));
      }
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chainForm">
      <div className="chainForm__inputCon">
        <TextField
          inputError={inputError.name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Name"
          value={name}
        />
      </div>

      <div className="chainForm__btnCon">
        <Button type="submit" fill="true" width="25rem">
          {editMode.status ? "Edit" : "Create"} Chain
        </Button>
      </div>
    </form>
  );
};

export default ChainForm;
