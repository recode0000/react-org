import useQueryComments from "../hooks/useQueryComments"

const FetchTasks = () => {
  const { data } = useQueryComments()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Comments List</p>
      {data?.map((comment) => (
        <p key={comment.id} className="my-3 text-sm">
          {comment.name}
        </p>
      ))}
    </div>
  )
}

export default FetchTasks