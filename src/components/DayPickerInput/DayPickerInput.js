import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useSelector } from 'react-redux';

export default function MyForm({timeState, setTimeState})  {
  const devices = useSelector(state => state.equipment.devices)
  
  if(timeState.selectedDay) {
      console.log(timeState.selectedDay.toLocaleDateString());
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
          {timeState.isEmpty && 'Пожалуйста, выберите дату сдачи в ремонт'}
          {!timeState.isEmpty && !timeState.selectedDay && 'This day is invalid'}
          {timeState.selectedDay && timeState.isDisabled && 'This day is disabled'}
          {timeState.selectedDay &&
            !timeState.isDisabled &&
            `You chose ${timeState.selectedDay.toLocaleDateString()}`}
        </p>
        <DayPickerInput
          value={timeState.selectedDay}
          onDayChange={handleDayChange}
          dayPickerProps={{
            selectedDays: timeState.selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
    );
  }
