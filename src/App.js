import Questions from "./components/Questions"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="questions" element={<Questions />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App;
