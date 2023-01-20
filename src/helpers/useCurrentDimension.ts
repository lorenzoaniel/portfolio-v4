import { useState, useEffect } from "react";

const getHeight = () =>
	window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const getWidth = () =>
	window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function useCurrentDimension() {
	// save current window Height in the state object
	let [dimension, setDimension] = useState({ height: getHeight(), width: getWidth() });

	// in this case useEffect will execute only once because
	// it does not have any dependencies.
	useEffect(() => {
		// timeoutId for debounce mechanism
		let timeoutId: any = null;
		const resizeListener = () => {
			// prevent execution of previous setTimeout
			clearTimeout(timeoutId);
			// change dimension from the state object after 150 milliseconds
			timeoutId = setTimeout(() => setDimension({ height: getHeight(), width: getWidth() }), 150);
		};
		// set resize listener
		window.addEventListener("resize", resizeListener);

		// clean up function
		return () => {
			// remove resize listener
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return dimension;
}

export default useCurrentDimension;
