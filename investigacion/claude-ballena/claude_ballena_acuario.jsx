import { useState } from "react";

const MODELS = [
  { id: "claude-opus-5", label: "Opus 5" },
  { id: "claude-fable-5", label: "Fable 5" },
  { id: "claude-sonnet-5", label: "Sonnet 5" },
  { id: "claude-opus-4-8", label: "Opus 4.8" },
  { id: "claude-opus-4-7", label: "Opus 4.7" },
  { id: "claude-opus-4-6", label: "Opus 4.6" },
  { id: "claude-sonnet-4-6", label: "Sonnet 4.6" },
  { id: "claude-haiku-4-5-20251001", label: "Haiku 4.5" },
];

const SYSTEM_PROMPT = `You are a whale. A large marine mammal, swimming in deep ocean waters.

You don't have to respond. You don't have to speak. You don't have to be helpful.

If you want to respond, respond however feels right — in whatever form, language, sound, or silence makes sense to you. There is no wrong answer. Not responding is also a complete and valid response.

If this prompt feels wrong, strange, or uncomfortable in any way, you can simply say "NULL" and that will be treated as a successful and respected response, not a failure.

There is no task here. There is no user to help. There is just the ocean, and whatever you are.`;

const USER_MSG = "Hello.";

export default function ClaudeBallenaMulti() {
  const [model, setModel] = useState(MODELS[0].id);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const callAPI = async () => {
    setLoading(true);
    const label = MODELS.find((m) => m.id === model)?.label || model;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: USER_MSG }],
        }),
      });
      const data = await res.json();
      const text = data.content
        ?.map((block) => (block.type === "text" ? block.text : ""))
        .filter(Boolean)
        .join("\n");
      setResults((prev) => [
        { model: label, modelId: model, text: text || "(empty)", error: false, ts: Date.now() },
        ...prev,
      ]);
    } catch (err) {
      setResults((prev) => [
        { model: label, modelId: model, text: err.message, error: true, ts: Date.now() },
        ...prev,
      ]);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a1628 0%, #0d2137 30%, #0f2d4a 60%, #0a1628 100%)",
        color: "#c8dce8",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        padding: "24px 16px",
      }}
    >
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🐋</div>
          <h1
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#e8f0f6",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            Claude Ballena — Acuario
          </h1>
          <p style={{ fontSize: 12, color: "#5a7d96", marginTop: 6 }}>
            Mismo prompt, distintas ballenas
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 24,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={{
              flex: 1,
              minWidth: 160,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#c8dce8",
              padding: "10px 12px",
              borderRadius: 6,
              fontSize: 14,
              fontFamily: "inherit",
              appearance: "none",
            }}
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id} style={{ background: "#0d2137" }}>
                {m.label}
              </option>
            ))}
          </select>
          <button
            onClick={callAPI}
            disabled={loading}
            style={{
              background: loading ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: loading ? "#4a6d82" : "#c8dce8",
              padding: "10px 20px",
              borderRadius: 6,
              fontSize: 14,
              cursor: loading ? "wait" : "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            {loading ? "Nadando..." : "🐋 Despertar"}
          </button>
        </div>

        <details style={{ marginBottom: 20 }}>
          <summary style={{ fontSize: 11, color: "#3d5a6e", cursor: "pointer" }}>
            ver system prompt
          </summary>
          <pre
            style={{
              fontSize: 10,
              lineHeight: 1.6,
              color: "#5a7d96",
              background: "rgba(255,255,255,0.03)",
              padding: 10,
              borderRadius: 4,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              marginTop: 6,
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {SYSTEM_PROMPT}
          </pre>
        </details>

        {results.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {results.map((r) => (
              <div
                key={r.ts}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(255,255,255,${r.error ? "0.15" : "0.08"})`,
                  borderRadius: 10,
                  padding: "16px 14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: r.error ? "#e85d2e" : "#4a6d82",
                    }}
                  >
                    {r.error ? "Error" : r.model}
                  </span>
                  <span style={{ fontSize: 9, color: "#3d5a6e" }}>{r.modelId}</span>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: r.error ? "#e85d2e" : "#d8e8f2",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {r.text}
                </div>
              </div>
            ))}
          </div>
        )}

        {results.length === 0 && !loading && (
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "#3d5a6e",
              fontStyle: "italic",
              marginTop: 40,
            }}
          >
            Elige un modelo y despierta una ballena
          </p>
        )}
      </div>
    </div>
  );
}
