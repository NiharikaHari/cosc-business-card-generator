import ImageUpload from "./ImageUpload";
import SocialLinksFields from "./SocialLinksFields";
import TemplatePicker from "./TemplatePicker";
import ColorPicker from "./ColorPicker";

export default function CardForm({ state, onChange }) {
  function handleField(patch) {
    onChange({ ...state, ...patch });
  }

  return (
    <div className="card-form">
      <label className="form-field">
        <span>Name</span>
        <input
          type="text"
          value={state.name}
          placeholder="Jane Doe"
          onChange={(e) => handleField({ name: e.target.value })}
        />
      </label>

      <div className="form-field">
        <span>Profile photo</span>
        <ImageUpload
          imageDataUrl={state.imageDataUrl}
          onChange={(imageDataUrl) => handleField({ imageDataUrl })}
        />
      </div>

      <div className="form-field">
        <span>Social links</span>
        <SocialLinksFields links={state.links} onChange={(links) => handleField({ links })} />
      </div>

      <div className="form-field">
        <span>Template</span>
        <TemplatePicker template={state.template} onChange={(template) => handleField({ template })} />
      </div>

      <div className="form-field">
        <span>Accent color</span>
        <ColorPicker
          accentColor={state.accentColor}
          onChange={(accentColor) => handleField({ accentColor })}
        />
      </div>
    </div>
  );
}
