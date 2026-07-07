import { forwardRef } from "react";
import { TEMPLATES } from "../templates";

const CardPreview = forwardRef(function CardPreview(
  { template, name, imageDataUrl, links, accentColor },
  ref
) {
  const Template = TEMPLATES[template] ?? TEMPLATES.minimal;

  return (
    <Template
      ref={ref}
      name={name}
      imageDataUrl={imageDataUrl}
      links={links}
      accentColor={accentColor}
    />
  );
});

export default CardPreview;
