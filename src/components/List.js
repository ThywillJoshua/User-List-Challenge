//style
import "./List.scss";

export default function List({ users }) {
  if (!users.length) return <div></div>;

  return (
    <div className="list__container">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
}
