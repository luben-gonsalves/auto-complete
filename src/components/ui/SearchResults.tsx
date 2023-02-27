import React from 'react'
import { Data } from 'src/types/ui'

interface Props {
	listData: Data[]
}

export default function SearchResults({ listData = [] }: Props) {
	return (
		<div className="border-gray-150 absolute top-11 h-[300px] w-full overflow-auto rounded-lg">
			<ul className="w-full rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium text-gray-900">
				{listData.length === 0
					? 'Query didnt match any results'
					: listData.map((item: Data) => {
							return (
								<li key={item.pzn} className="w-full px-4 py-2">
									{item.name}
								</li>
							)
					  })}
			</ul>
		</div>
	)
}
