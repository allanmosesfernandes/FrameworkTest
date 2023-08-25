/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
import Logo from "../assets/images/homepage/Logo.svg";

function Header() {
  return (
    <header className="bg-transparent px-6 py-10">
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
