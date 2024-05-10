import { Button } from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom";
import AuthPage from "./pages/AuthPage/authPage";
import HomePage from "./pages/HomePage/homePage";



function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
     </Routes>
    </>
  )
}

export default App
