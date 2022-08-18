import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <nav id="navbar">
      <div id="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/myVehicles">My Vehicles</Link>
      </div>
    </nav>
  );
};

export default Navbar;
