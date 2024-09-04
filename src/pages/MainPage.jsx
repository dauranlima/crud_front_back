import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <main className="w-screen h-screen bg-purple-950 text-white">
      <div className="max-w-4xl mx-auto h-screen border border-b-gray-500">
        <Outlet />
      </div>
    </main>
  );
}
