import { readFileAsDataURL, resizeImageDataUrl } from "../utils/fileUtils";

export default function ImageUpload({ imageDataUrl, onChange }) {
  async function handleFile(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const dataUrl = await readFileAsDataURL(file);
    const resized = await resizeImageDataUrl(dataUrl);
    onChange(resized);
  }

  return (
    <div className="image-uploader">
      {imageDataUrl && (
        <div className="image-uploader-thumb">
          <img src={imageDataUrl} alt="" />
          <button
            type="button"
            className="image-uploader-remove"
            onClick={() => onChange(null)}
            aria-label="Remove photo"
          >
            ✕
          </button>
        </div>
      )}
      <label className="image-uploader-trigger">
        {imageDataUrl ? "Change photo" : "+ Add photo"}
        <input type="file" accept="image/*" onChange={handleFile} hidden />
      </label>
    </div>
  );
}
