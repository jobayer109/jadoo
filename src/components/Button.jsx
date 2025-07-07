import { useState } from "react";

const Button = ({
  children,
  className,
  style,
  onClick,
  type = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    navButton: {
      color: "#212832",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "22px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: isHovered ? "#212832" : "transparent",
      borderRadius: "5px",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      cursor: "pointer",
      transitionProperty: "all",
      transitionDuration: "200ms",
    },

    heroButton: {
      backgroundColor: isHovered ? "#d19e00" :"#f1a501",
      color: "#ffffff",
      boxShadow: "0px 20px 35px #f1a50126",
      transition: "opacity 150ms ease-in-out",
      outline: "none",
    },

    playButton: {
      width: "3rem",
      height: "3rem",
      backgroundColor: "#df6951",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 15px 30px #df69514c",
      transition: "transform 200ms",
      cursor: "pointer",
    },
  };

  const appliedStyles = {
    ...buttonStyles[type],
    ...style,
  };

  return (
    <button
      className={`${className}`}
      style={appliedStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
