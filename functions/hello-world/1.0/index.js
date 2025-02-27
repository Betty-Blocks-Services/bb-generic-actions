import { hello } from "../../utils/index.js";

async function helloWorld({ name }) {
	return {
		result: hello(name),
	};
}
export { helloWorld as default };
