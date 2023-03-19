import { BrowserRouter, Routes, Route } from "react-router-dom"
import Questions from "./pages/Questions"
import Question from "./pages/Question"
import Layout from "./components/Layout"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="questions" element={<Questions />} />
          <Route path="questions/:id" element={<Question />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App;
