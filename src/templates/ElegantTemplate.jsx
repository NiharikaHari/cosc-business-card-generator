import { forwardRef } from "react";
import Icon from "../components/Icon";
import { getFilledLinks, getFontStack, getInitials } from "../constants";
import "./templates.css";

const ElegantTemplate = forwardRef(function ElegantTemplate(
  { name, title, company, tagline, imageDataUrl, links, accentColor, secondaryColor, font, background },
  ref
) {
  const filledLinks = getFilledLinks(links);

  return (
    <div
      ref={ref}
      className="business-card card-elegant"
      style={{ "--accent": accentColor, "--secondary": secondaryColor, "--font-heading": getFontStack(font) }}
    >
      <div className="card-elegant-ring card-fill" data-bg={background}>
        {imageDataUrl ? (
          <img src={imageDataUrl} alt="" className="business-card-photo card-elegant-photo" />
        ) : (
          <div className="business-card-photo-placeholder card-elegant-photo">
            {getInitials(name)}
          </div>
        )}
      </div>
      <p className="card-elegant-name card-name">{name || "Your Name"}</p>
      {title && <p className="card-title">{title}</p>}
      {company && <p className="card-company">{company}</p>}
      <div className="card-elegant-divider" />
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
  );
});

export default ElegantTemplate;
