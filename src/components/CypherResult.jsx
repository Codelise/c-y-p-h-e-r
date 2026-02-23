export default function CypherResult({ label, text, isPigPen = false }) {
  return (
    <>
      <ul>
        <li>
          {/* label and value/text */}
          <strong>{label}: </strong>
          {/* for PigPen text */}
          {/* if the text is Pigpen, it will use the font pigpen, else normal */}
          <span className={isPigPen ? "pigpen-text" : ""}>{text}</span>
        </li>
      </ul>
    </>
  );
}
