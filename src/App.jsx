import "./App.css";
import { Header } from "./components/header";
import { AllArticles } from "./components/AllArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";
import { Profile } from "./components/Profile";
import { Topics } from "./components/Topics";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
