import "./App.css";
import { Header } from "./components/header";
import { AllArticles } from "./components/AllArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
