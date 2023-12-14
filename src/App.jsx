import "./App.css";
import { Header } from "./components/header";
import { AllArticles } from "./components/AllArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";
import { Profile } from "./components/Profile";
import { Topics } from "./components/Topics";
import { UserProvider } from "./contexts/UserContext";
import { TopicArticles } from "./components/TopicArticles";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic" element={<TopicArticles />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
