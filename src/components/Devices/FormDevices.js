import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_DEVICES } from "../../redux/types";
import MyForm from "../DayPickerInput/DayPickerInput";
import './FormDevice.scss'

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
      <form className='form' onSubmit={onChangeHandler}>
        <div className='device__form'>
          <div className='device__form__label'>
        <label className='deviasdce__form__labael'>Тип техники</label>
        </div>
        <div className='device__form__input'>
        <select className='devdsice__form__input' onChange={(event)=> setTypeDevices(event.target.value)}>
          <option value={'MFU'}>МФУ</option>
          <option value={'printer'}>Принтер</option>
          <option value={'scaner'}>Сканер</option>
          <option value={'systemUnit'}>Системный блок</option>
          <option value={'monitor'}>Монитор</option>
        </select>
        </div>
        </div>
        <br />
        <div className='device__form'>
          <div className='device__form__label'>
        <label className='dasddevice__form__label'>Наименование техники</label>
        </div>
        <div className='device__form__input'>
        <input className='devdasdice__form__input'
        value={deviceName}
        onChange={(event) => onAddInventoryName(event)}
        />
        </div>
        </div>
        <br />
        <div className='device__form'>
        <div className='device__form__label'>
        <label className='devicedasd__form__label'>Инвентарный номер</label>
        </div>
        <div className='device__form__input'>
        <input className='device__fodasdarm__input'
        value={inventoryNumber}
        onChange={(event) => onAddInventoryNumber(event)}
        />
        </div>
        </div>
        <br />
        <div className='device__form'>
        <MyForm date={dateImportOnSU} setTimeState={setTimeState}/>
        </div>
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