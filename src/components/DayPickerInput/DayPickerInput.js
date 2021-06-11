import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useSelector } from 'react-redux';

export default function MyForm({dateImportOnSU, setTimeState})  {
  const devices = useSelector(state => state.equipment.devices)
  
  if(dateImportOnSU.selectedDay) {
      console.log(dateImportOnSU.selectedDay.toLocaleDateString());
  }

  const handleDayChange= (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    setTimeState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }

    return (
      <div>
        <p>
          {dateImportOnSU.isEmpty && 'Пожалуйста, выберите дату сдачи в ремонт'}
          {!dateImportOnSU.isEmpty && !dateImportOnSU.selectedDay && 'This day is invalid'}
          {dateImportOnSU.selectedDay && dateImportOnSU.isDisabled && 'This day is disabled'}
          {dateImportOnSU.selectedDay &&
            !dateImportOnSU.isDisabled &&
            `You chose ${dateImportOnSU.selectedDay.toLocaleDateString()}`}
        </p>
        <DayPickerInput
          value={dateImportOnSU.selectedDay}
          onDayChange={handleDayChange}
          dayPickerProps={{
            selectedDays: dateImportOnSU.selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
    );
  }
