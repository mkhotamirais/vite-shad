import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <Toaster />
        <Header />
        <main className="grow container">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
