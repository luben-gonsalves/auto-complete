export function debounce(func: (e: React.ChangeEvent<HTMLInputElement>) => void, limiter: number) {
	let timer: any = null
	return function (...args: any) {
		const context = this
		clearTimeout(timer)
		timer = setTimeout(function () {
			func.apply(context, args)
		}, limiter)
	}
}
