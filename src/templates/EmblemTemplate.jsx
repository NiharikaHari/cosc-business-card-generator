import { forwardRef } from "react";
import Icon from "../components/Icon";
import { getFilledLinks, getFontStack, getInitials } from "../constants";
import "./templates.css";

const EmblemTemplate = forwardRef(function EmblemTemplate(
  { name, title, company, tagline, imageDataUrl, links, accentColor, secondaryColor, font, background },
  ref
) {
  const filledLinks = getFilledLinks(links);

  return (
    <div
      ref={ref}
      className="business-card card-emblem"
      style={{ "--accent": accentColor, "--secondary": secondaryColor, "--font-heading": getFontStack(font) }}
    >
      <div className="card-emblem-badge card-fill" data-bg={background}>
        {imageDataUrl ? (
          <img src={imageDataUrl} alt="" className="business-card-photo card-emblem-photo" />
        ) : (
          <div className="business-card-photo-placeholder card-emblem-photo">
            {getInitials(name)}
          </div>
        )}
      </div>
      <div className="card-emblem-body">
        <p className="card-emblem-name card-name">{name || "Your Name"}</p>
        {title && <p className="card-title">{title}</p>}
        {company && <p className="card-company">{company}</p>}
        {tagline && <p className="card-tagline">{tagline}</p>}
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

export default EmblemTemplate;
