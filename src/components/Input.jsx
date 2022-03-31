import { useState } from "react";

export const Input = ({ onClick }) => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");

  const handleChangeText = (event) => {
    setValue(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const onClickk = (value, time) => {
    onClick(value, time);
    setValue("");
    setTime("");
  };
  return (
    <div>
      <div className="input">
        <label>
          <input
            type="text"
            onChange={handleChangeText}
            value={value}
            placeholder="Task"
            id="text"
          />
        </label>
        <input
          type="datetime-local"
          onInput={handleChangeTime}
          value={time}
          id="dateTime"
        />
        <button onClick={() => onClickk(value, time)}>Add task</button>
      </div>
    </div>
  );
};
