async function getAPIs(slug) {
  const response = await fetch(
    `https://66bcd15024da2de7ff6bf12b.mockapi.io/API/${slug}`
  );

  if (!response.ok) {
    throw new Error("fetch Error");
  }
  return response.json();
}

async function Page({ params }) {
  const api = await getAPIs(params.slug);
  return (
    <div>
      ID: {params.slug}
      <div>
        Profile Name: {api.name}
      </div>
      <div>
        Bio: {api.bio}
      </div>
    </div>
  );
}

export default Page;
