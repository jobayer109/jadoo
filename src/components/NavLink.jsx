
const NavLink = ({ children, href, className = '', ...props }) => {
  return (
    <a
      href={href}
      className={`text-header-1 font-google-sans text-base lg:text-[17px] leading-[22px] hover:opacity-70 transition-opacity duration-200 ${className}`}
      style={{
        width: '100%',
        height: '22px',
        top: '56px',
        left: '478px',
        fontWeight: '400',
        fontSize: '17px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
