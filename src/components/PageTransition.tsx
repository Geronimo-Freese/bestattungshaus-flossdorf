import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset visibility when route changes
    setIsVisible(false);
    
    // Trigger entrance animation after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`transition-smooth ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};
