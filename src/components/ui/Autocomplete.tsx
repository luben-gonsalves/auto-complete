import Fuse from 'fuse.js'
import React, { FunctionComponent, useState } from 'react'
import { Data } from 'src/types/ui'

import SearchResults from './SearchResults'

const options: Fuse.IFuseOptions<Data> = {
	keys: ['name'],
}
interface Props {
	placeholder?: string
	minQueryLength?: number
	maxResults?: number
	debounceDelayTime?: number
	cacheSize?: number
	cacheExpiration?: number
	getResults?: Promise<Data[]>
	renderResults?: FunctionComponent
	data: Data[]
}

function Autocomplete({ data, placeholder, maxResults = 20, debounceDelayTime = 300 }: Props) {
	const [search, setSearch] = useState<{ searchText: string; results: Data[] }>({
		searchText: '',
		results: [],
	})

	const { results, searchText } = search
	const fuse = new Fuse(data, options)

	const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const results = fuse.search(value, { limit: maxResults }).map((fuseItem) => fuseItem.item)
		if (results.length > 0) {
			localStorage.setItem('cachedResults', JSON.stringify(results))
		}
		setSearch({ searchText: value, results })
	}

	function debounce(func: (e: React.ChangeEvent<HTMLInputElement>) => void, limiter: number) {
		let timer: any = null
		return function (...args: any) {
			const context = this
			clearTimeout(timer)
			timer = setTimeout(function () {
				func.apply(context, args)
			}, limiter)
		}
	}

	const customDebounce = debounce(handeChange, debounceDelayTime)

	return (
		<div className="relative w-full">
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<input
					className="w-full rounded-md border border-solid border-gray-400 p-2 outline-none"
					placeholder={placeholder}
					onChange={customDebounce}
					autoFocus
				/>
			</form>
			<SearchResults searchText={searchText} listData={results} />
		</div>
	)
}

export default Autocomplete
