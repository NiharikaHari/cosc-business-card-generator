import Icon from "./Icon";
import { SOCIAL_PLATFORMS } from "../constants";

export default function SocialLinksFields({ links, onChange }) {
  function handleFieldChange(id, value) {
    onChange({ ...links, [id]: value });
  }

  return (
    <div className="social-links-fields">
      {SOCIAL_PLATFORMS.map((platform) => (
        <label key={platform.id} className="form-field social-link-field">
          <span className="social-link-label">
            <Icon name={platform.id} size={14} />
            {platform.label}
          </span>
          <input
            type="text"
            value={links[platform.id]}
            placeholder={platform.placeholder}
            onChange={(e) => handleFieldChange(platform.id, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}
