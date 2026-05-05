import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { DestinationDetail } from "./pages/DestinationDetail";
import { Packages } from "./pages/Packages";
import { CustomTrips } from "./pages/CustomTrips";
import { About } from "./pages/About";
import { TravelGuide } from "./pages/TravelGuide";
import { FAQs } from "./pages/FAQs";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "destinations", Component: Destinations },
      { path: "destinations/:country", Component: DestinationDetail },
      { path: "packages", Component: Packages },
      { path: "custom-trips", Component: CustomTrips },
      { path: "about", Component: About },
      { path: "travel-guide", Component: TravelGuide },
      { path: "faqs", Component: FAQs },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
