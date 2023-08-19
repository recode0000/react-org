import useQueryTasks from "../hooks/useQueryTasks"

const FetchTasks = () => {
  const { data } = useQueryTasks()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Task List</p>
      {data?.map((task) => (
        <p key={task.id} className="my-3 text-sm">
          {task.title}
        </p>
      ))}
    </div>
  )
}

export default FetchTasks