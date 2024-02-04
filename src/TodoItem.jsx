export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <div class="checkbox-wrapper">
          <input
            checked={completed}
            type="checkbox"
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <svg viewBox="0 0 35.6 35.6">
            <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
            <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
            <polyline
              class="check"
              points="11.78 18.12 15.55 22.23 25.17 12.87"
            ></polyline>
          </svg>
        </div>
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} class="button">
        <svg viewBox="0 0 448 512" class="svgIcon">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
      </button>
    </li>
  );
}
