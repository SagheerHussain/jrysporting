import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setShowSidebar }) => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openShooting, setOpenShooting] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);

  return (
    <aside
      id="sidebar"
      className="min-h-screen fixed top-0 left-0 w-64 h-full overflow-y-auto"
      style={{
        background: "url('/Images/texture.png'), #7a3e34",
        backgroundBlendMode: "multiply",
        backgroundSize: "contain",
        height: "calc(100vh + 6rem)",
      }}
    >
      <div className="text-end px-4 py-2">
        <button
          onClick={() => setShowSidebar(false)}
          id="close-sidebar"
          className="text-4xl text-white"
        >
          &times;
        </button>
      </div>

      <div className="py-6">
        <ul>
          <li className="py-4 text-white border-b border-white px-4">
            <Link to="/">Home</Link>
          </li>

          {/* About */}
          <li className="text-white border-b border-white px-4">
            <div
              className="py-4 cursor-pointer flex justify-between items-center"
              onClick={() => setOpenAbout(!openAbout)}
            >
              About
              <span className="text-sm">{openAbout ? "▲" : "▼"}</span>
            </div>
            <ul
              className={`pl-2 text-sm text-white transition-all duration-300 overflow-hidden ${
                openAbout ? "max-h-60" : "max-h-0"
              }`}
            >
              <li className="py-2"><Link to="/coyoto-valley">Coyoto Valley</Link></li>
              <li className="py-2"><Link to="/proshop">Proshop</Link></li>
              <li className="py-2"><Link to="/gun-transfer">Gun Transfer</Link></li>
              <li className="py-2"><Link to="/lodging">Lodging</Link></li>
              <li className="py-2"><Link to="/faq">FAQ</Link></li>
            </ul>
          </li>

          {/* Shooting */}
          <li className="text-white border-b border-white px-4">
            <div
              className="py-4 cursor-pointer flex justify-between items-center"
              onClick={() => setOpenShooting(!openShooting)}
            >
              Shooting
              <span className="text-sm">{openShooting ? "▲" : "▼"}</span>
            </div>
            <ul
              className={`pl-2 text-sm text-white transition-all duration-300 overflow-hidden ${
                openShooting ? "max-h-60" : "max-h-0"
              }`}
            >
              <li className="py-2"><Link to="/courses">Courses</Link></li>
              <li className="py-2"><Link to="/range-rules">Ranges Rules</Link></li>
              <li className="py-2"><Link to="/requirements">Requirements</Link></li>
              <li className="py-2"><Link to="/first-time-shooter">First Time Shooters</Link></li>
            </ul>
          </li>

          {/* Instructions */}
          <li className="text-white border-b border-white px-4">
            <div
              className="py-4 cursor-pointer flex justify-between items-center"
              onClick={() => setOpenInstructions(!openInstructions)}
            >
              Instructions
              <span className="text-sm">{openInstructions ? "▲" : "▼"}</span>
            </div>
            <ul
              className={`pl-2 text-sm text-white transition-all duration-300 overflow-hidden ${
                openInstructions ? "max-h-60" : "max-h-0"
              }`}
            >
              <li className="py-2"><Link to="/experience-package">Experience Package</Link></li>
              <li className="py-2"><Link to="/private-instructions">Private Instructions</Link></li>
              <li className="py-2"><Link to="/nra-pistol-class">NRA Pistol Class</Link></li>
              <li className="py-2"><Link to="/home-defense">Home Defence</Link></li>
            </ul>
          </li>

          <li className="py-4 text-white border-b border-white px-4">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="py-4 text-white border-b border-white px-4">
            <Link to="#">Calender</Link>
          </li>
          <li className="py-4 text-white border-b border-white px-4">
            <Link to="/events">Events</Link>
          </li>
          <li className="py-4 text-white border-b border-white px-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
