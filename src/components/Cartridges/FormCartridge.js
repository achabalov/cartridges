import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBranch from "./formComponent/SelectBranch";
import ModalCartridgeForm from "./ModalAddForm/ModalCartridgeForm";
import './Cartridges.scss'
import { SHOW_MODAL_ADD_CARTRIDGE } from "../../redux/types";

export function FormCartridge() {

    const cartridge = useSelector(state => state.equipment.cartridges);
    const count = useSelector(state=> state.cartridge.count);
    const model = useSelector(state=> state.cartridge.model);
    console.log(cartridge);
    
    const dispatch = useDispatch();
    const branch = useSelector(state => state.equipment.branch)
  console.log(branch);
    useEffect(()=> {
      console.log(branch);
      branch && dispatch({type: SHOW_MODAL_ADD_CARTRIDGE, payload: true})
    }, [branch])

    function submitHandler(event) {
        event.preventDefault();
      //   const newTypeCartridge = {
      //     id: Date.now(),
      //     branch, 
      //     model,
      //     count
      // }
      //   if(branch !== '' && model !== '' && count !== '') {
      //     dispatch({type: ADD_NEW_CARTRIDGE, payload: newTypeCartridge})
      //   } else {
      //     console.log('вы не выбрали поля');
      //   }
    }
    const cls = ['form__container']



  return (
    <form className={'form__container'} onSubmit={submitHandler}>
      <div className="form__container__contols">
        
        <label className='form-label'>Выберите свой филиал</label>
        <SelectBranch />
        <ModalCartridgeForm />
        </div>
    </form>
  );
}

