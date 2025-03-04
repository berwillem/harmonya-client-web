import { useEffect, useState } from "react";
import "./Agenda.css";
import moment from "moment";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import Block from "./Block";
import { useParams } from "react-router-dom";
import { getStorebyOwner } from "@/services/stores";

const Agenda: React.FC = () => {
  const days = [
    "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
  ];

  const [currentWeek, setCurrentWeek] = useState(0);
  const { owner } = useParams();
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; time: string } | null>(null);
  const hours = Array.from({ length: 9 }, (_, i) => `${8 + i}:00`);
  const [stores, setStores] = useState<{ id: string; name: string; employees: { id: string; name: string }[] }[]>([]);
  const [selectedStore, setSelectedStore] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");

  useEffect(() => {
    if (owner) {
      getStorebyOwner(owner)
        .then((res) => {
          setStores(res.data.data); // Vérifie que l'API retourne bien un tableau avec employees inclus
        })
        .catch((err) => console.error("Erreur lors de la récupération des magasins :", err));
    }
  }, [owner]);

  const employees = stores.find(store => store.id === selectedStore)?.employees || [];

  return (
    <div className="agenda-container">
      <div className="select">
        <select onChange={(e) => setSelectedStore(e.target.value)} value={selectedStore}>
          <option value="">Sélectionner un magasin</option>
          {stores.map((store) => (
            <option key={store.id} value={store.id}>{store.name}</option>
          ))}
        </select>

        {selectedStore && employees.length > 0 && (
          <select onChange={(e) => setSelectedEmployee(e.target.value)} value={selectedEmployee}>
            <option value="">Sélectionner un employé</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>{employee.fullname}</option>
            ))}
          </select>
        )}
      </div>

      <div className="agenda-table">
        <button
          className="agenda-navigate agenda-navigate-left"
          onClick={() => setCurrentWeek((prev) => Math.max(prev - 1, 0))}
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
                    onClick={() => setSelectedSlot({ date, time: hour })}
                    selected={selectedSlot?.date === date && selectedSlot?.time === hour}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <button
          className="agenda-navigate agenda-navigate-right"
          onClick={() => setCurrentWeek((prev) => prev + 1)}
        >
          <NavigateNextRoundedIcon />
        </button>
      </div>

      <div className="button-container">
        <button className="confirm-button" onClick={() => {
          if (selectedSlot) {
            alert(`Vous avez sélectionné : ${selectedSlot.date} à ${selectedSlot.time}`);
          }
        }}>
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Agenda;
