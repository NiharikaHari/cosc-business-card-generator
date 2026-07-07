import ImageUpload from "./ImageUpload";
import SocialLinksFields from "./SocialLinksFields";
import TemplatePicker from "./TemplatePicker";
import ColorPicker from "./ColorPicker";
import FontPicker from "./FontPicker";
import BackgroundPicker from "./BackgroundPicker";

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

      <label className="form-field">
        <span>Job title</span>
        <input
          type="text"
          value={state.title}
          placeholder="Product Designer"
          onChange={(e) => handleField({ title: e.target.value })}
        />
      </label>

      <label className="form-field">
        <span>Company</span>
        <input
          type="text"
          value={state.company}
          placeholder="Acme Inc."
          onChange={(e) => handleField({ company: e.target.value })}
        />
      </label>

      <label className="form-field">
        <span>Tagline</span>
        <input
          type="text"
          value={state.tagline}
          placeholder="Building delightful products"
          onChange={(e) => handleField({ tagline: e.target.value })}
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
        <span>Font</span>
        <FontPicker font={state.font} onChange={(font) => handleField({ font })} />
      </div>

      <div className="form-field">
        <span>Background style</span>
        <BackgroundPicker
          background={state.background}
          accentColor={state.accentColor}
          secondaryColor={state.secondaryColor}
          onChange={(background) => handleField({ background })}
        />
      </div>

      <div className="form-field">
        <span>Accent color</span>
        <ColorPicker
          value={state.accentColor}
          onChange={(accentColor) => handleField({ accentColor })}
        />
      </div>

      <div className="form-field">
        <span>Secondary color</span>
        <ColorPicker
          value={state.secondaryColor}
          onChange={(secondaryColor) => handleField({ secondaryColor })}
        />
      </div>
    </div>
  );
}
