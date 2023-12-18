import { headers, cookies } from "next/headers";

export default function Album() {
  const headersList = headers();
  const cookiesList = cookies();

  return (
    <div>
      <h1>This is the [albumName] route&apos;s page component!</h1>
      <p>List of headers:</p>
      <pre>
        {JSON.stringify(headersList, null, 2 )}
      </pre>
      <p>List of cookies:</p>
      <pre>
        {JSON.stringify(cookiesList, null, 2 )}
      </pre>
    </div>
  )
};
