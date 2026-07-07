import { forwardRef } from "react";
import Icon from "../components/Icon";
import { getFilledLinks, getInitials } from "../constants";
import "./templates.css";

const ModernTemplate = forwardRef(function ModernTemplate(
  { name, imageDataUrl, links, accentColor },
  ref
) {
  const filledLinks = getFilledLinks(links);

  return (
    <div
      ref={ref}
      className="business-card card-modern"
      style={{ "--accent": accentColor }}
    >
      <div className="card-modern-side">
        {imageDataUrl ? (
          <img src={imageDataUrl} alt="" className="business-card-photo card-modern-photo" />
        ) : (
          <div className="business-card-photo-placeholder card-modern-photo">
            {getInitials(name)}
          </div>
        )}
      </div>
      <div className="card-modern-body">
        <p className="card-modern-name">{name || "Your Name"}</p>
        {filledLinks.length > 0 && (
          <div className="business-card-links">
            {filledLinks.map((platform) => (
              <span key={platform.id} className="business-card-link" title={links[platform.id]}>
                <Icon name={platform.id} size={13} />
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default ModernTemplate;
