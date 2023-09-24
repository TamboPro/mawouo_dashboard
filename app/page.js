import Image from "next/image";
import HeaderPage from "@/components/header"
import SideBar from "@/components/sideBar"
import PanelLeft from "@/components/panelLeft"

export default function Home() {
  return (
    <>

      <HeaderPage/>

      <SideBar/>

      <div className="content ml-12 transform ease-in-out duration-500 pt-[3.5rem] px-2 md:px-5 pb-4 ">
          <PanelLeft />
      </div>
    </>
  );
}
