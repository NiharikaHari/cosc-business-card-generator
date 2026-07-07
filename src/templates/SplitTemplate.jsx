import { forwardRef } from "react";
import Icon from "../components/Icon";
import { getFilledLinks, getFontStack, getInitials, getSubtitle } from "../constants";
import "./templates.css";

const SplitTemplate = forwardRef(function SplitTemplate(
  { name, title, company, tagline, imageDataUrl, links, accentColor, secondaryColor, font, background },
  ref
) {
  const filledLinks = getFilledLinks(links);
  const subtitle = getSubtitle(title, company);

  return (
    <div
      ref={ref}
      className="business-card card-split"
      style={{ "--accent": accentColor, "--secondary": secondaryColor, "--font-heading": getFontStack(font) }}
    >
      <div className="card-split-left card-fill" data-bg={background}>
        {imageDataUrl ? (
          <img src={imageDataUrl} alt="" className="business-card-photo card-split-photo" />
        ) : (
          <div className="business-card-photo-placeholder card-split-photo">
            {getInitials(name)}
          </div>
        )}
        <p className="card-split-name card-name">{name || "Your Name"}</p>
      </div>
      <div className="card-split-right">
        <div className="card-split-text">
          {subtitle && <p className="card-title">{subtitle}</p>}
          {tagline && <p className="card-tagline">{tagline}</p>}
        </div>
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

export default SplitTemplate;
