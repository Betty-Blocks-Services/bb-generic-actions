import { hello } from "../../utils";

export default async function helloWorld({ name }) {
  return {
    result: hello(name),
  };
}
