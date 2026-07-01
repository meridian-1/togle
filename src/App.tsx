import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Здесь позже добавятся защищённые маршруты (дашборд и т.д.) */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
