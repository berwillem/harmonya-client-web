import React from "react";
import Table from "../../components/Table/Table";
import NavBar from "@/components/NavBar/NavBar";
import "./Historique.css";

export default function Historique() {
  const headers = [
    "Nom du service",
    "Catégorie",
    "Temps du service",
    "Prix",
    "Date",
    "Action",
  ];

  const data = [
    ["OO1", "Lalout Mehdi", "+218 554 96 93 57", "5", "Willem bœchiche", "5"],
    ["OO1", "Lalout Mehdi", "+218 554 96 93 57", "5", "Willem bœchiche", "5"],
    ["OO1", "Lalout Mehdi", "+218 554 96 93 57", "5 ", "Willem bœchiche", "5"],
    ["OO1", "Lalout Mehdi", "+218 554 96 93 57", "5", "Willem bœchiche", "5"],
  ];
  return (
    <>
      <NavBar />
      <section className="container-historique">
        <h1>Mes réservations</h1>
        <div className="table-container-historique">
          <h1>Réservation a venir</h1>
          <Table headers={headers} data={data} />
        </div>
        <div className="table-container-historique">
          <h1>Historique de réservation</h1>
          <Table headers={headers} data={data} />
        </div>
      </section>
    </>
  );
}
