async function getData() {
  const res = await fetch('http://34.101.182.43:8000')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}
 
export default async function Home() {
  const data = await getData()
 
  return <main>fetch: {data.message}</main>
}