import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App copy.tsx'
import { Toaster } from 'sonner'
import { BrowserRouter as Router } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Toaster theme='dark' richColors position='top-right' />
		<Router>
			<App />
		</Router>
	</StrictMode>,
)
