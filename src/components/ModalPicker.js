import React, { useEffect, useState } from "react";
import "./ModalPicker.css";

const HORARIOS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const HORARIOS_STRING = [
  "7:00 a 8:00",
  "8:00 a 9:00",
  "9:00 a 10:00",
  "10:00 a 11:00",
  "11:00 a 12:00",
  "12:00 a 13:00",
  "13:00 a 14:00",
  "14:00 a 15:00",
  "15:00 a 16:00",
  "16:00 a 17:00",
  "17:00 a 18:00",
  "18:00 a 19:00",
  "19:00 a 20:00",
  "20:00 a 21:00",
  "21:00 a 22:00",
];

const ModalPicker = (props) => {
  const selectedTime = props.week[props.selectedDate].horarios;

  console.log(selectedTime);

  const onPressItem = (horario) => {
    props.setData(horario);
  };

  const Salir = () => {
    props.changeModalVisibility(false);
  };

  useEffect(() => {
    console.log("ModalPicker: ", props.week[props.selectedDate].horarios);
  }, [props.week[props.selectedDate].horarios]);
  const horario = HORARIOS.map((item, index) => {
        

    return (
        <button
            key={index}
            className="horario"
            onPress={() => onPressItem(item)}
        >
            
            <h1 className={(selectedTime.indexOf(item) === -1 ? "textHorario" :  "textHorario2")}>
                Book at {HORARIOS_STRING[index]}              
            </h1>
        </button>
    );

});

  return (
    <div>
        
        <button className="salir" onClick={() => Salir()}>
          <h1>Go Back</h1>
        </button>

        <div>
            {horario}
        </div>
      </div>
  );
};
          /*
                      <a
              key={index}
              className="horario"
              onClick={() => onPressItem(item)}
            >
              <span
                className={
                  selectedTime.indexOf(item) === -1
                    ? "textHorario"
                    : "textHorario2"
                }
              >
                Book at {HORARIOS_STRING[index]}
              </span>
            </a>
           */
export default ModalPicker;
