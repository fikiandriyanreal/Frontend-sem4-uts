// membuat tombol untuk menandai list kegiatan yang sudah selesai dan yang akan dihapus
function ReactState({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>

      <div>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => markTodo(index)}
        >
          Selesai
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => removeTodo(index)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ReactState;
