import React, { useState } from "react";
// import DayPicker from 'react-day-picker';
// import DayPickerInput from 'react-day-picker/DayPickerInput';

// import 'react-day-picker/lib/style.css';
import { useDispatch, useSelector } from "react-redux";
import { ADD_DEVICES } from "../../redux/types";
import MyForm from "../DayPickerInput/DayPickerInput";

export default function FormDevices() {
  const devices = useSelector(state => state.equipment.devices)
  const dispatch = useDispatch('');
  const [typeDevices, setTypeDevices] = useState('');
  const [inventoryNumber, setInventoryNumbver] = useState('')
  const [breakingType, setBreakingType] = useState('');
  const [timeState, setTimeState] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  })

  function onAddInventoryNumber(event){
    setInventoryNumbver(event.target.value);
  }



  function onChangeHandler() {
    const newDevices = {
      typeDevices,
      inventoryNumber,
      breakingType
    }
    dispatch({type: ADD_DEVICES, payload: newDevices})
  }
  console.log(timeState);

  return (
    <>
      <h2>Техника в ремонт</h2>
      <form onSubmit={onChangeHandler}>
        <label>Тип техники</label>
        <select onChange={(event)=> setTypeDevices(event.target.value)}>
          <option value={'MFU'}>МФУ</option>
          <option value={'printer'}>Принтер</option>
          <option value={'scaner'}>Сканер</option>
          <option value={'systemUnit'}>Системный блок</option>
          <option value={'monitor'}>Монитор</option>
        </select>
        <br />
        <label>Инвентарный номер</label>
        <input
        value={inventoryNumber}
        onChange={(event) => onAddInventoryNumber(event)}
        />
        <br />
        <label>Суть поломки</label>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Не печатает
          </label>
          </div>
          <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Не включается
          </label>
          <div className="form-check form-switch"></div>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Печатает с полосками
          </label>
          <div className="form-check form-switch"></div>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Зажевывает бумагу
          </label>
          <div className="form-check form-switch"></div>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Гудит
          </label>
        </div>

        <label></label>
        
        <MyForm timeState={timeState} setTimeState={setTimeState}/>
        <button type='submit' className='btn btn-success'>Отправить</button>
      </form>
    </>
  );
}
