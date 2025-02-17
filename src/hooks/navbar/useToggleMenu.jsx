import { useState } from "react";

const useToggleMenu = () => {
  const [isToggle, setToggle] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  return { isToggle, setToggle, isMenuVisible, setMenuVisible };
};

export default useToggleMenu;
