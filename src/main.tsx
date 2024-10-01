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
import Pagination from "./pages/components/pagination/Pagination.tsx";
import Stopwatch from "./pages/apps/Stopwatch.tsx";
import Clock from "./pages/apps/Clock.tsx";
import SymbolColor from "./pages/apps/SymbolColor.tsx";
import FlipText from "./pages/others/FlipText.tsx";
import Svg from "./pages/others/Svg.tsx";
import Canvas from "./pages/others/Canvas.tsx";
import CssBackground from "./pages/others/CssBackground.tsx";
import Navbar2 from "./pages/components/navbar2/Navbar2.tsx";
import Landing1 from "./pages/others/Landing1.tsx";
import Landing2 from "./pages/others/Landing2.tsx";
import Bulb1 from "./pages/framer/Bulb1.tsx";
import Bulb2 from "./pages/framer/Bulb2.tsx";
import ElementScroll from "./pages/framer/ElementScroll.tsx";
import FloatNav1 from "./pages/framer/FloatNav1.tsx";
import FloatNav2 from "./pages/framer/FloatNav2.tsx";
import Parallax from "./pages/framer/Parallax.tsx";
import ProgressBar1 from "./pages/framer/ProgressBar1.tsx";
import FloatNav3 from "./pages/framer/FloatNav3.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* components */}
      <Route path="accordion" element={<Accordion />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="navbar-2" element={<Navbar2 />} />
      <Route path="pagination" element={<Pagination />} />
      {/* tips */}
      <Route path="sticky" element={<Sticky />} />
      <Route path="copy-alert" element={<CopyAlert />} />
      <Route path="use-in-view" element={<UseInView />} />
      <Route path="object-tips" element={<ObjectTips />} />
      {/* apps */}
      <Route path="clock" element={<Clock />} />
      <Route path="stopwatch" element={<Stopwatch />} />
      <Route path="symbol-color" element={<SymbolColor />} />
      {/* framer */}
      <Route path="bulb-1" element={<Bulb1 />} />
      <Route path="bulb-2" element={<Bulb2 />} />
      <Route path="element-scroll" element={<ElementScroll />} />
      <Route path="float-nav-1" element={<FloatNav1 />} />
      <Route path="float-nav-2" element={<FloatNav2 />} />
      <Route path="float-nav-3" element={<FloatNav3 />} />
      <Route path="parallax" element={<Parallax />} />
      <Route path="progress-bar-1" element={<ProgressBar1 />} />
      {/* others */}
      <Route path="callendar" element={<Callendar />} />
      <Route path="flip-text" element={<FlipText />} />
      <Route path="svg" element={<Svg />} />
      <Route path="canvas" element={<Canvas />} />
      <Route path="css-background" element={<CssBackground />} />
      <Route path="landing-1" element={<Landing1 />} />
      <Route path="landing-2" element={<Landing2 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
