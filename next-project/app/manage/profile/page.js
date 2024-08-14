import { headers } from "next/headers";
import Link from "next/link";

async function getAPI() {
  const response = await fetch(
    "https://66bcd15024da2de7ff6bf12b.mockapi.io/API"
  );

  if (!response.ok) {
    throw new Error("fetch Error");
  }
  return response.json();
}

async function Page() {
  const headerRequest = headers();
  const user = JSON.parse(headerRequest.get("user"));

  const profile = await getAPI();
  return (
    <div>
      Manage Profile
      <div>{user.email}</div>
      <div>
        Profile List:
        {profile.map((api, index) => (
          <div key={index}>
            {api.id} {api.name}
            <Link
              href={`/manage/profile/${api.id}`}
              className="px-4 bg-blue-400"
            >
              Go to edit profile...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
