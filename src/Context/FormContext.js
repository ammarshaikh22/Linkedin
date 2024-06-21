import { createContext, useState, useEffect } from "react";
import mainImg from "../img/logoImg.webp";
export const context = createContext();

const FormContext = (props) => {
  const [name, setName] = useState({
    fName: "Unknown",
    lName: "Person",
  });

  const [isOpen, setIsOpen] = useState(false);

  const [fullN, setFullN] = useState({
    fName: localStorage.getItem("fName") || "Unknown",
    lName: localStorage.getItem("lName") || "Person",
  });

  useEffect(() => {
    setFullN({
      fName: localStorage.getItem("fName") || "Unknown",
      lName: localStorage.getItem("lName") || "Person",
    });
  }, []);
  const [img, setImg] = useState(mainImg);
  return (
    <context.Provider
      value={{ name, setName, fullN, setFullN, isOpen, setIsOpen, img, setImg }}
    >
      {props.children}
    </context.Provider>
  );
};

export default FormContext;
