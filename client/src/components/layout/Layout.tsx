import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Header onHamburgerClick={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
