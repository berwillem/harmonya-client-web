import NavBar from "@/components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}
