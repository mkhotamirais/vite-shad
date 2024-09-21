import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
