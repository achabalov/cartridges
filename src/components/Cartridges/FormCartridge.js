import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_CARTRIDGE, NEW_TYPES_CARTRIDGE } from "../../redux/types";

export function FormCartridge() {

    const cartridge = useSelector(state => state.equipment.cartridge);
    const newT = useSelector(state => state.equipment.newTypeCartridge);

    const dispatch = useDispatch();
    const [branch, setBranch] = useState('')
    const [model, setModel] = useState('')
    const [count, setCount] = useState('')

    function defValue() {
        setBranch('')
        setModel()
        setCount('')
    }

    function submitHandler(event) {
        event.preventDefault()
        dispatch({type: ADD_NEW_CARTRIDGE, payload: newT})
    }

    function addNewTypesOfCartridge(event) {
        event.preventDefault();
        const newTypeCartridge = {
            branch, 
            model,
            count
        }
        dispatch({type: NEW_TYPES_CARTRIDGE, payload: newTypeCartridge})
        defValue()
    }

    

    function onCheckedCounter(event) {
        console.log(Number.isInteger(+event.target.value));
        if(!Number.isInteger(+event.target.value)) {
            return 
        } if(event.target.value > 30) {
            return
        } else {
            setCount(event.target.value);
        }
        
    }

  return (
    <form onSubmit={submitHandler} style={{width: '80%', margin: '0 auto'}}>
      <div className="mb-3">
          <label className='form-label'>Выберите свой филиал</label>
      <select onChange={event => setBranch(event.target.value)} className='form-select'>
            <option value='Дзержинский'>Дзержинский</option>
            <option value='Центральный'>Центральный</option>
            <option value='Ворошиловский'>Ворошиловский</option>
            <option value='Краснооктябрьский'>Краснооктябрьский</option>
            <option value='Тракторозаводской'>Тракторозаводской</option>
            <option value='Советский'>Советский</option>
            <option value='Кировский'>Кировский</option>
            <option value='Красноармейский'>Красноармейский</option>
        </select>
        <label className='form-label'>Выберите тип картриджа</label>
        <select onChange={event => setModel(event.target.value)} className='form-select'>
            <option value='285-435'>285-435</option>
            <option value='TK-1200'>TK-1200</option>
            <option value='FX10-703'>FX10-703</option>
            <option value='725'>725</option>
            <option value='728'>728</option>
            <option value='1170'>1170</option>
        </select>
        <label htmlFor="modelCartridge" className="form-label">
          Укажите колличество картриджей (от 1 до 30)
        </label>
        <input
          type="text"
          className="form-control"
          value={count}
          onChange={onCheckedCounter}
          id="modelCartridge"
        />
      </div>
      <button type="submit" className="btn btn-success m-3" onClick={(event)=> addNewTypesOfCartridge(event)}>
        Добавить еще
      </button>
      <button type="submit" className="btn btn-primary">
        Отправить
      </button>
    </form>
  );
}
