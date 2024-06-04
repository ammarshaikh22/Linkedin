import { log } from "console";
import { useState } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const errors = useRouteError();
  console.log(errors)
  const [error, setError] = useState<any>(errors)
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h3>{error.status}</h3>
      <p>{error.data}</p>
    </div>
  );
}