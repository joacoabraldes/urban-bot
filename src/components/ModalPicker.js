import React, {useState } from "react";
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
  const [update, setUpdate] = useState(false);
  
  const selectedTime = props.week[props.selectedDate].horarios;

  const onPressItem = (horario) => {
    props.setData(horario);
    setUpdate(!update);
  };

  const horario = HORARIOS.map((item, index) => {
        if(props.selectedDate == 5 && (index > 7 || index < 2)){
        }else{
          return (
            <a
                key={index}
                className= "horario"
                id={(selectedTime.indexOf(item) === -1 ? "horario-color-red" :  "horario-color-green")}
                onClick={() => onPressItem(item)}
            >
                    {HORARIOS_STRING[index]}              
            </a>
        );
        }
});

  return (     
    <>

        <div className="divhorario" id={props.selectedDate == 5 ? "finde" : "semana"}>
            {horario}
        </div>
    </> 
  );
};
export default ModalPicker;
