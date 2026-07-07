import { useEffect, useRef, useState } from "react";
import CardForm from "./components/CardForm";
import CardPreview from "./components/CardPreview";
import ExportBar from "./components/ExportBar";
import { loadState, saveState } from "./storage";
import "./App.css";

export default function App() {
  const [state, setState] = useState(loadState);
  const [saveError, setSaveError] = useState("");
  const cardRef = useRef(null);

  useEffect(() => {
    setSaveError(saveState(state) ?? "");
  }, [state]);

  return (
    <div className="app-page">
      <header className="topbar">
        <span className="app-icon" aria-hidden="true">💳</span>
        <h1 className="app-title">Business Card Generator</h1>
      </header>

      <main className="app-main">
        {saveError && <p className="form-error save-error">{saveError}</p>}

        <div className="app-panes">
          <section className="app-pane">
            <CardForm state={state} onChange={setState} />
          </section>

          <section className="app-pane app-pane-preview">
            <div className="card-preview-wrap">
              <CardPreview
                ref={cardRef}
                template={state.template}
                name={state.name}
                imageDataUrl={state.imageDataUrl}
                links={state.links}
                accentColor={state.accentColor}
              />
            </div>
            <ExportBar cardRef={cardRef} name={state.name} />
          </section>
        </div>
      </main>
    </div>
  );
}
