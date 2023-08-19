import useQueryUsers from "../hooks/useQueryUsers"

const FetchUsers = () => {
  const { data } = useQueryUsers()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List</p>
      {data?.map((user) => (
        <p key={user.id} className="my-3 text-sm">
          {user.username}
        </p>
      ))}
    </div>
  )
}

export default FetchUsers