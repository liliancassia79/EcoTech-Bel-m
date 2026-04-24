import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface EcoModeContextType {
  ecoMode: boolean;
  toggleEcoMode: () => void;
  showEcoInfo: boolean;
  setShowEcoInfo: (show: boolean) => void;
}

const EcoModeContext = createContext<EcoModeContextType | undefined>(undefined);

export function EcoModeProvider({ children }: { children: ReactNode }) {
  const [ecoMode, setEcoMode] = useState(() => {
    const saved = localStorage.getItem("ecoMode");
    return saved === "true";
  });
  const [showEcoInfo, setShowEcoInfo] = useState(false);

  useEffect(() => {
    if (ecoMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("ecoMode", String(ecoMode));
  }, [ecoMode]);

  const toggleEcoMode = () => {
    const newMode = !ecoMode;
    setEcoMode(newMode);
    if (newMode) {
      setShowEcoInfo(true);
    }
  };

  return (
    <EcoModeContext.Provider value={{ ecoMode, toggleEcoMode, showEcoInfo, setShowEcoInfo }}>
      {children}
    </EcoModeContext.Provider>
  );
}

export function useEcoMode() {
  const context = useContext(EcoModeContext);
  if (!context) {
    throw new Error("useEcoMode must be used within EcoModeProvider");
  }
  return context;
}
