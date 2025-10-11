import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PageTransition } from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};