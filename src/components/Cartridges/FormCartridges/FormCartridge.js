import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBranch from "../formComponent/SelectBranch";
import ModalCartridgeForm from "../ModalAddForm/ModalCartridgeForm";
import "./FormCartridge.scss";
import { SHOW_MODAL_ADD_CARTRIDGE } from "../../../redux/types";

export function FormCartridge() {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.equipment.branch);
  useEffect(() => {
    branch && dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: true });
  }, [branch]);

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={"form__container"} onSubmit={submitHandler}>
      <div className="form__container__contols">
        <label className="form-label">Выберите свой филиал</label>
        <SelectBranch />
        <ModalCartridgeForm />
      </div>
    </form>
  );
}
