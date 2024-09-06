export default function Input({ label, ...props }) {
  return (
    <p className="control">
      <label htmlFor={props.id}>{label}</label>
      <input {...props} required />
    </p>
  );
}
