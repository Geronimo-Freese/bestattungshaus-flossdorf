import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    // Use requestAnimationFrame for better performance
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(scrollToTop);
    }, 50); // Slightly longer delay for better UX

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};
