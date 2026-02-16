import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="bg-body-dark text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* A simple footer can be added here later */}
    </div>
  );
}
