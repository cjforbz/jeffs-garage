import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <header>
      <nav id="navbar">
        <div id="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/myVehicles">My Vehicles</Link>
          <Link href="/createVehicle">New Vehicle</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
