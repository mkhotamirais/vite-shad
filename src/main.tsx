import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./pages/navbar/Navbar.tsx";
import UseInView from "./pages/use-in-view/UseInView.tsx";
import Accordion from "./pages/accordion/Accordion.tsx";
import Sticky from "./pages/sticky/Sticky.tsx";
import Carousel from "./pages/carousel/Carousel.tsx";
import { CopyAlert } from "./pages/copy/CopyAlert.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="sticky" element={<Sticky />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="copy-alert" element={<CopyAlert />} />
      <Route path="use-in-view" element={<UseInView />} />
      <Route path="navbar" element={<Navbar />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
