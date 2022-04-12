// membuat component untuk menampung list Kegiatan
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // membuat event handling ketika form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            ToDo
          </label>
          <input
            type="text"
            className="form-control"
            id="input todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div id="ToDo" className="form-text">
            Tambahkan Kegiatan Anda
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default Form;
