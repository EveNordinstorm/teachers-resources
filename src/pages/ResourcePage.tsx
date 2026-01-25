import { useParams } from "react-router-dom";

export default function ResourcePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Title</h1>
      <p>Resource ID: {id}</p>
      <p>Description</p>
    </div>
  );
}
