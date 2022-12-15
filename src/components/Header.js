import React from "react";
import { HeaderContainer } from "./Header.styles";
import { useState, useEffect } from 'react';

function Header() {
     const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setIsDark(true);
        } else setIsDark(false);
      });
  
       return () => {
        window.removeEventListener("scroll", null);
      };
    }, []);
   
    return (
    <HeaderContainer dark={isDark}>
      <img
        src="/Netxus.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </HeaderContainer>
  );
}

export default Header;