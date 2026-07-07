import { forwardRef } from "react";
import Icon from "../components/Icon";
import { getFilledLinks, getInitials } from "../constants";
import "./templates.css";

const ClassicTemplate = forwardRef(function ClassicTemplate(
  { name, imageDataUrl, links, accentColor },
  ref
) {
  const filledLinks = getFilledLinks(links);

  return (
    <div
      ref={ref}
      className="business-card card-classic"
      style={{ "--accent": accentColor }}
    >
      {imageDataUrl ? (
        <img src={imageDataUrl} alt="" className="business-card-photo card-classic-photo" />
      ) : (
        <div className="business-card-photo-placeholder card-classic-photo">
          {getInitials(name)}
        </div>
      )}
      <div className="card-classic-body">
        <p className="card-classic-name">{name || "Your Name"}</p>
        {filledLinks.length > 0 && (
          <div className="business-card-links">
            {filledLinks.map((platform) => (
              <span key={platform.id} className="business-card-link">
                <Icon name={platform.id} size={11} /> <span>{links[platform.id]}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default ClassicTemplate;
