import { gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { useEffect } from "react"

const GET_LESSONS_QUERY = gql`
query {
  lessons {
    id
    title
  }
}`

interface lesson {
  id: string;
  title: string;
}

function App() {
  const { data }= useQuery<{ lessons: lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
  <ul>
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
  </ul>
  )
  }
export default App
