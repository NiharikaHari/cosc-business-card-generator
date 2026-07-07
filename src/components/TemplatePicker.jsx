import { TEMPLATE_OPTIONS } from "../constants";

export default function TemplatePicker({ template, onChange }) {
  return (
    <div className="template-picker">
      {TEMPLATE_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          className={template === option.id ? "template-option template-option-active" : "template-option"}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
