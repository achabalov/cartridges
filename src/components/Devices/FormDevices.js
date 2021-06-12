import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_DEVICES } from "../../redux/types";
import MyForm from "../DayPickerInput/DayPickerInput";

export default function FormDevices() {

  // актуально ли использование useState в таком ключе вместе с Redux
  const dispatch = useDispatch('');
  const [deviceName, setDeviceName] = useState('');
  const [typeDevices, setTypeDevices] = useState('');
  const [inventoryNumber, setInventoryNumbver] = useState('')
  // const [breakingType, setBreakingType] = useState('');
  const [dateImportOnSU, setTimeState] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  })

  function onAddInventoryNumber(event){
    setInventoryNumbver(event.target.value);
  }

  function onAddInventoryName(event) {
    setDeviceName(event.target.value)
  }

  // функция отправки элемента в state 
  function onChangeHandler(event) {
    event.preventDefault();
    const newDevices = {
      id: Date.now(),
      typeDevices,
      deviceName,
      inventoryNumber,
      // breakingType,
      dateImportOnSU,
      dateExportOnRepair: '',
      dateImportOfRepair: '',
      dateExportToSU: ''
    }
    dispatch({type: ADD_DEVICES, payload: newDevices})
  }

  // форму можно разбить на более мелкие компоненты, добавить проверок для полей
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
        <label>Наименование техники</label>
        <input
        value={deviceName}
        onChange={(event) => onAddInventoryName(event)}
        />
        <br />
        <label>Инвентарный номер</label>
        <input
        value={inventoryNumber}
        onChange={(event) => onAddInventoryNumber(event)}
        />
        <br />
        <label>Суть поломки</label>
        <label></label>
      
        <MyForm date={dateImportOnSU} setTimeState={setTimeState}/>
        <button type='submit' className='btn btn-success'>Отправить</button>
      </form>
    </>
  );
}



/* <div className="form-check form-switch">
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
        </div> */