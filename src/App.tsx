import React from 'react'
import ReactDom from 'react-dom/client'

import './Index.css'

function App() {
	return <div className="grid justify-center"></div>
}

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
