import { hello } from "../../utils/index.js";

export default async function helloWorld({ name }) {
  return {
    result: hello(name),
  };
}
