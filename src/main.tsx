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
import PrivateRoute from "./components/PrivateRoute";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route
              path="characters"
              element={
                <PrivateRoute>
                  <CharactersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="characters/:id"
              element={
                <PrivateRoute>
                  <CharacterDetailsPage />
                </PrivateRoute>
              }
            />

            <Route
              path="locations"
              element={
                <PrivateRoute>
                  <LocationsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="locations/:id"
              element={
                <PrivateRoute>
                  <LocationDetailsPage />
                </PrivateRoute>
              }
            />

            <Route
              path="episodes"
              element={
                <PrivateRoute>
                  <EpisodesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="episodes/:id"
              element={
                <PrivateRoute>
                  <EpisodeDetailsPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
