import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./pages/components/navbar/Navbar.tsx";
import UseInView from "./pages/tips/use-in-view/UseInView.tsx";
import Accordion from "./pages/components/accordion/Accordion.tsx";
import Sticky from "./pages/tips/Sticky.tsx";
import Carousel from "./pages/components/Carousel.tsx";
import { CopyAlert } from "./pages/tips/CopyAlert.tsx";
import ObjectTips from "./pages/tips/ObjectTips.tsx";
import Callendar from "./pages/others/Callendar.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* components */}
      <Route path="accordion" element={<Accordion />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="navbar" element={<Navbar />} />
      {/* tips */}
      <Route path="sticky" element={<Sticky />} />
      <Route path="copy-alert" element={<CopyAlert />} />
      <Route path="use-in-view" element={<UseInView />} />
      <Route path="object-tips" element={<ObjectTips />} />
      {/* others */}
      <Route path="callendar" element={<Callendar />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
