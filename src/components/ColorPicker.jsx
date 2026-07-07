import { ACCENT_COLORS } from "../constants";

export default function ColorPicker({ value, onChange }) {
  return (
    <div className="color-picker">
      {ACCENT_COLORS.map((color) => (
        <button
          key={color.id}
          type="button"
          className={value === color.hex ? "color-swatch color-swatch-active" : "color-swatch"}
          style={{ background: color.hex }}
          aria-label={color.id}
          onClick={() => onChange(color.hex)}
        />
      ))}
      <input
        type="color"
        className="color-swatch color-swatch-custom"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Custom color"
      />
    </div>
  );
}
