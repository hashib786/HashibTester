import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Preview from "./pages/Preview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question/:questionId" element={<Question />} />
        <Route path="preview/:questionId" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
