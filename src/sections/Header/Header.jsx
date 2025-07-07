import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from '../../components/Button';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const menuItems = [
    { name: "Destinations", href: "#destinations" },
    { name: "Hotels", href: "#hotels" },
    { name: "Flights", href: "#flights" },
    { name: "Bookings", href: "#bookings" },
    { name: "Login", href: "#login" },
    { name: "Sign up", href: "#signup" },
  ];

  const languages = ["EN", "BN",];

  return (
    <header className="relative z-10 max-w-7xl w-full mx-auto py-8 px-4">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Jadoo Logo"
              className="w-[80px] h-[22px] sm:w-[100px] sm:h-[28px] lg:w-[114px] lg:h-[32px] cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden p-2 text-header"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="navButton"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {menuItems.map((item, index) => (
                <Button key={index} role="menuitem" type="navButton">{item.name}</Button>
              ))}
              {/* Language Selector */}
              <div className="relative">
                <Button
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="navButton"
                  className="flex items-center gap-1.5"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                >
                  <span>{selectedLanguage}</span>
                  <img
                    src="/icons/arrow_down.svg"
                    alt=""
                    className="w-[8px] h-[4px]"
                  />
                </Button>

                {/* Dropdown Menu */}
                <ul
                  ref={dropdownRef}
                  role="menu"
                  className={`absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[60px] transition-all duration-200 ${isLanguageDropdownOpen ? 'opacity-100 visible ' : 'opacity-0 invisible'}`}
                >
                  {languages.map((lang) => (
                    <li key={lang} role="menuitem">
                      <button
                        className="w-full px-3 py-1 text-left text-header-1 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden absolute top-15 left-0 right-0 shadow-lg border-t border-gray-200 z-10`}
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  role="menuitem"
                  type="navButton"
                  className="flex flex-col"
                >
                  {item.name}
                </Button>
              ))}


              <div className="flex items-center gap-2 ml-4">
                <span className="text-header font-medium ">
                  Language:
                </span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="text-header font-medium bg-transparent border-none focus:outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
