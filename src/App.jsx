import "./App.css";
import { Header } from "../components/header";
import { Body } from "../components/body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleBody } from "../components/ArticleBody";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/article/:article_id" element={<ArticleBody />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
