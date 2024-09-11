import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto h-screen">
        <Header/>
          <Outlet />
      </div>
    </main>
  );
}
