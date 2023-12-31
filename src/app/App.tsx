import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/Layout/Layout";
import { Character } from "./screens/Characters/Character";
import { AllEpisodes } from "./screens/Episodes/AllEpisodes";
import { Episode } from "./screens/Episodes/Episode";
import { AllLocations } from "./screens/Locations/AllLocations";
import { Location } from "./screens/Locations/Location";
import { Home } from "./screens/Home/Home";
import { NotFound } from "./screens/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="/episode" element={<AllEpisodes />} />
            <Route path="/episode/:id" element={<Episode />} />
            <Route path="/location" element={<AllLocations />} />
            <Route path="/location/details" element={<Location />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
