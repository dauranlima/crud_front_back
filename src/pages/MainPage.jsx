import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Provider from "../context/Provider";

export default function MainPage() {
  return (
    <main>
      <Provider>
        <div className="max-w-7xl mx-auto h-screen">
            <Header/>
            <Outlet />
        </div>
      </Provider>
    </main>
  );
}
