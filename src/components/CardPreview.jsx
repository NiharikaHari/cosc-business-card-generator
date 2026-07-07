import { forwardRef } from "react";
import { TEMPLATES } from "../templates";

const CardPreview = forwardRef(function CardPreview(
  { template, name, title, company, tagline, imageDataUrl, links, accentColor, secondaryColor, font, background },
  ref
) {
  const Template = TEMPLATES[template] ?? TEMPLATES.minimal;

  return (
    <Template
      ref={ref}
      name={name}
      title={title}
      company={company}
      tagline={tagline}
      imageDataUrl={imageDataUrl}
      links={links}
      accentColor={accentColor}
      secondaryColor={secondaryColor}
      font={font}
      background={background}
    />
  );
});

export default CardPreview;
