import { FONT_OPTIONS } from "../constants";

export default function FontPicker({ font, onChange }) {
  return (
    <div className="template-picker">
      {FONT_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          className={font === option.id ? "template-option template-option-active" : "template-option"}
          style={{ fontFamily: option.css }}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
