import { forwardRef } from "react";
import Icon from "../components/Icon";
import { getFilledLinks, getInitials } from "../constants";
import "./templates.css";

const MinimalTemplate = forwardRef(function MinimalTemplate(
  { name, imageDataUrl, links, accentColor },
  ref
) {
  const filledLinks = getFilledLinks(links);

  return (
    <div
      ref={ref}
      className="business-card card-minimal"
      style={{ "--accent": accentColor }}
    >
      {imageDataUrl ? (
        <img src={imageDataUrl} alt="" className="business-card-photo card-minimal-photo" />
      ) : (
        <div className="business-card-photo-placeholder card-minimal-photo">
          {getInitials(name)}
        </div>
      )}
      <p className="card-minimal-name">{name || "Your Name"}</p>
      <div className="card-minimal-divider" />
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
  );
});

export default MinimalTemplate;
