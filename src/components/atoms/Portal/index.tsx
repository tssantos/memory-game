import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortaProps {
  children: React.ReactNode;
}

const Portal = (props: PortaProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const element = document.querySelector("#portal");

  return mounted && element
    ? createPortal(props.children, element)
    : null;
};

export default Portal;