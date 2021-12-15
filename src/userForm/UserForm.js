import "./userForm.scss";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import List from "../components/List";
import Overlay from "../components/Overlay";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false);
  const [isLessThanZero, setIsLessThanZero] = useState(false);

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !age) {
      setIsEmpty(true);

      return;
    }

    if (age < 0) {
      setIsLessThanZero(true);

      return;
    }

    setUsers((prevusers) => {
      return [...prevusers, { username, age, id: uuidv4() }];
    });

    setUsername("");
    setAge("");
  };

  //closeErrMessage
  const closeErrMessage = (e) => {
    e.preventDefault();

    setIsEmpty(false);
    setIsLessThanZero(false);
  };

  return (
    <div>
      <form className="form__container" onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>

        <label>
          <span>Age (Years)</span>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>

        <button>Add User</button>
      </form>

      <List users={users} />
      <Overlay
        isEmpty={isEmpty}
        isLessThanZero={isLessThanZero}
        closeErrMessage={closeErrMessage}
      />
    </div>
  );
}
