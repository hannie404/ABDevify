import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layouts"
import { About, Career, Contact, Home, Service } from "./pages"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='career' element={<Career />} />
        <Route path='service' element={<Service />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
