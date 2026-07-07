import { BACKGROUND_OPTIONS } from "../constants";

export default function BackgroundPicker({ background, accentColor, secondaryColor, onChange }) {
  return (
    <div className="template-picker">
      {BACKGROUND_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          className={background === option.id ? "template-option template-option-active" : "template-option"}
          onClick={() => onChange(option.id)}
        >
          <span
            className="card-fill bg-swatch"
            data-bg={option.id}
            style={{ "--accent": accentColor, "--secondary": secondaryColor }}
          />
          {option.label}
        </button>
      ))}
    </div>
  );
}
