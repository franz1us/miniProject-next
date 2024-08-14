import Link from "next/link"

async function getAPI() {
  const response = await fetch('https://66bcd15024da2de7ff6bf12b.mockapi.io/API')

  if (!response.ok){
    throw new Error("fetch Error")
  }
  return response.json()
}

async function Page() {

  const apis = await getAPI()
  return (
    <div>
      Test page

      {
        apis.map((api, index) => (
          <div key={index}>
            {api.id} {api.name}
            <Link href={`/profile/${api.id}`} className="px-4 bg-blue-400">Go to see Profile...</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Page
