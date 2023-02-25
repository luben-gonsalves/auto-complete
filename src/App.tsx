import React from 'react'
import ReactDom from 'react-dom/client'
import Autocomplete from './components/ui/Autocomplete'

import './Index.css'
import { dummyData } from './constants/data'

function App() {
	return (
		<div className="p-10">
			<Autocomplete
				data={dummyData}
				placeholder="Search...."
				maxResults={15}
				debounceDelayTime={50}
			/>
		</div>
	)
}

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
