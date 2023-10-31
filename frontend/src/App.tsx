import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Preview from "./pages/Preview";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question" element={<Question />} />
        <Route path="preview/:questionId" element={<Preview />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
