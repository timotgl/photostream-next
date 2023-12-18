import { headers } from "next/headers";

export default function Album() {
  const headersList = headers();

  return (
    <div>
      <h1>This is the [albumName] route&apos;s page component!</h1>
      <p>List of headers:</p>
      <pre>
        {JSON.stringify(headersList, null, 2 )}
      </pre>
    </div>
  )
};
