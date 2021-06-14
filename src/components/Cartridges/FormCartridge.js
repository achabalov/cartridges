import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_CARTRIDGE, NEW_TYPES_CARTRIDGE, SHOW_MODAL_ADD_CARTRIDGE } from "../../redux/types";
import SelectBranch from "./formComponent/SelectBranch";
import SelectModel from "./formComponent/SelectModel";
import SelectCartridgeCount from "./formComponent/SelectCartridgeCount";
import ModalCartridgeForm from "./ModalAddForm/ModalCartridgeForm";
import './Cartridges.scss'

export function FormCartridge() {

    const cartridge = useSelector(state => state.equipment.cartridges);
    const modal = useSelector(state => state.equipment.modal);
    const newT = useSelector(state => state.equipment.newTypeCartridge);
    const addLoading = useSelector(state => state.equipment.addLoading);
    const dispatch = useDispatch();
    const [branch, setBranch] = useState('')
    const [model, setModel] = useState('')
    const [count, setSelectCartridgeCount] = useState('')

    function defValue() {
        setBranch('')
        setModel('')
        setSelectCartridgeCount('')
    }

    useEffect(()=> {
      defValue();
      console.log('defValue');
    }, [cartridge])

    useEffect(()=> {
      if(branch) {
        dispatch({type: SHOW_MODAL_ADD_CARTRIDGE, payload: true})
      }
      console.log(modal);
    },[branch])

    function submitHandler(event) {
        event.preventDefault();
        const newTypeCartridge = {
          id: Date.now(),
          branch, 
          model,
          count
      }
        if(branch !== '' && model !== '' && count !== '') {
          dispatch({type: ADD_NEW_CARTRIDGE, payload: newTypeCartridge})
        } else {
          console.log('вы не выбрали поля');
        }
    }
    const cls = ['form__container']
    if(modal) {
      cls.push('modal__z');
    }

  return (
    <form className={cls.join(' ')} onSubmit={submitHandler}>
      <div className="form__container__contols">
        
        
        {modal ? '' : <>
        <label className='form-label'>Выберите свой филиал</label>
        <SelectBranch setBranch={setBranch}/>
        </>
        }

        {modal ? <ModalCartridgeForm /> : <p>пусто</p>}
        
        {/* <label className='form-label'>Выберите тип картриджа</label>
        <SelectModel setModel={setModel}/>
      
        <label htmlFor="modelCartridge" className="form-label">Укажите колличество картриджей (от 1 до 30)</label>
        <SelectCartridgeCount setSelectCartridgeCount={setSelectCartridgeCount}/>
         */}
      </div>
      {/* <button type="submit" className="btn btn-success m-3" onClick={(event)=> addNewTypesOfCartridge(event)}>
        Добавить еще
      </button> */}
      {/* <button type="submit" className="btn btn-primary">
        Отправить
      </button> */}
    </form>
  );
}






      /* <select onChange={event => setBranch(event.target.value)} disabled={addLoading} className='form-select'>
            <option value='Дзержинский'>Дзержинский</option>
            <option value='Центральный'>Центральный</option>
            <option value='Ворошиловский'>Ворошиловский</option>
            <option value='Краснооктябрьский'>Краснооктябрьский</option>
            <option value='Тракторозаводской'>Тракторозаводской</option>
            <option value='Советский'>Советский</option>
            <option value='Кировский'>Кировский</option>
            <option value='Красноармейский'>Красноармейский</option>
        </select> */

        // <select onChange={event => setModel(event.target.value)} className='form-select'>
        //     <option value='285-435'>285-435</option>
        //     <option value='TK-1200'>TK-1200</option>
        //     <option value='FX10-703'>FX10-703</option>
        //     <option value='725'>725</option>
        //     <option value='728'>728</option>
        //     <option value='1170'>1170</option>
        // </select>