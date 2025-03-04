import { useState } from "react";
import "./Agenda.css";
import moment from "moment";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import Block from "./Block";

const Agenda: React.FC = () => {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; time: string } | null>(null);
  const hours = Array.from({ length: 9 }, (_, i) => `${8 + i}:00`);

  const handlePrevWeek = () => setCurrentWeek((prev) => Math.max(prev - 1, 0));
  const handleNextWeek = () => setCurrentWeek((prev) => prev + 1);

  const handleSelectSlot = (date: string, time: string) => {
    setSelectedSlot({ date, time });
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      alert(`Vous avez sélectionné : ${selectedSlot.date} à ${selectedSlot.time}`);
    }
  };

  return (
    <div className="agenda-container">
      <div className="select">
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="agenda-table">
        <button
          className="agenda-navigate agenda-navigate-left"
          onClick={handlePrevWeek}
          disabled={currentWeek === 0}
        >
          <NavigateBeforeRoundedIcon />
        </button>

        {days.map((day, index) => {
          const date = moment().add(index, "days").format("DD/MM/YYYY");
          return (
            <div className="agenda-day" key={index}>
              <p>{day}</p>
              <p>{date}</p>
              <div className="grid-day">
                {hours.map((hour, idx) => (
                  <Block
                    key={idx}
                    time={hour}
                    onClick={() => handleSelectSlot(date, hour)}
                    selected={selectedSlot?.date === date && selectedSlot?.time === hour}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <button
          className="agenda-navigate agenda-navigate-right"
          onClick={handleNextWeek}
        >
          <NavigateNextRoundedIcon />
        </button>
      </div>
      <div className="button-container">
        <button className="confirm-button" onClick={handleConfirm}>
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Agenda;