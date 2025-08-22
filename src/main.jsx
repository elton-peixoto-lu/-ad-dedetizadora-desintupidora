import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DeviceProvider } from './providers/DeviceProvider.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { PrivacyPage } from './pages/PrivacyPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { PromotionsPage } from './pages/PromotionsPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/fale-comigo', element: <ContactPage /> },
  { path: '/lgpd', element: <PrivacyPage /> },
  { path: '/sobre-nos', element: <AboutPage /> },
  { path: '/promocoes', element: <PromotionsPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeviceProvider>
      <RouterProvider router={router} />
    </DeviceProvider>
  </StrictMode>,
)
