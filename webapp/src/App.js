import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Movies from "./pages/Movies"
import Navigation from "./pages/Navigation"

export default () => (
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Navigation />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  </Router>
)
