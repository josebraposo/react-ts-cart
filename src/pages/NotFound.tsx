import { getBaseUrl } from "../utilities/getBaseUrl";

export function NotFound() {
  return (
    <>
      <h1>Not found</h1>
      <p>This URL does not exist :(</p>
      <p>Click <a href={`${getBaseUrl()}/`}>here</a> to return to the store.</p>
    </>
  );
}
