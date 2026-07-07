import { ACCENT_COLORS } from "../constants";

export default function ColorPicker({ accentColor, onChange }) {
  return (
    <div className="color-picker">
      {ACCENT_COLORS.map((color) => (
        <button
          key={color.id}
          type="button"
          className={accentColor === color.hex ? "color-swatch color-swatch-active" : "color-swatch"}
          style={{ background: color.hex }}
          aria-label={color.id}
          onClick={() => onChange(color.hex)}
        />
      ))}
    </div>
  );
}
