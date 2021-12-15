//styles
import "./Overlay.scss";

export default function Overlay({
  isEmpty,
  isLessThanZero,
  errMessage,
  closeErrMessage,
}) {
  return (
    <div className={`overlay ${isEmpty || isLessThanZero ? "show" : "hide"}`}>
      <div className="container">
        <div>
          <h1>Invalid Input</h1>
        </div>

        <div>
          {isEmpty && (
            <p>Please enter a valid name and age (can't be empty).</p>
          )}
        </div>
        <div>
          {isLessThanZero && <p>Please enter a valid age (more than 0).</p>}
        </div>

        <button onClick={closeErrMessage}>Okay</button>
      </div>
    </div>
  );
}
