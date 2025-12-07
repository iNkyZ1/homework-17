import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import LocationsPage from "./pages/LocationsPage";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import EpisodesPage from "./pages/EpisodesPage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./contexts/AuthProvider";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route path="characters">
              <Route index element={<CharactersPage />} />
              <Route path=":id" element={<CharacterDetailsPage />} />
            </Route>

            <Route path="locations">
              <Route index element={<LocationsPage />} />
              <Route path=":id" element={<LocationDetailsPage />} />
            </Route>

            <Route path="episodes">
              <Route index element={<EpisodesPage />} />
              <Route path=":id" element={<EpisodeDetailsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
