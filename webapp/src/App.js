import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navigation from "./pages/Navigation"
import Movies from "./pages/Movies"
import People from "./pages/People"
import NotFound from "./pages/NotFound"
import AddMovie from "./components/AddMovie"

export default () => (
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Navigation />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="new" element={<AddMovie show={true} />} />
        </Route>
        <Route path="/people" element={<People />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
