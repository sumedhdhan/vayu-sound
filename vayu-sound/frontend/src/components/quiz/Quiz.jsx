import { useMemo, useRef, useState } from "react";
import { Button } from "../../components/ui/button";

export default function Quiz({ onSubmit }) {
  const questions = useMemo(
    () => [
      {
        id: "guitar-type",
        type: "mcq",
        question: "What kind of pickups are you looking for?",
        options: ["Stratocaster", "Telecaster", "Humbuckers", "P90s"],
        required: true,
      },
      {
        id: "music-genre",
        type: "mcq",
        question: "What styles do you play most?",
        options: ["Blues", "Rock", "Jazz", "Metal", "Country", "Indie / Alt"],
        required: true,
      },
      {
        id: "tonal-preference",
        type: "mcq",
        question: "Choose a tonal direction",
        options: ["Bright / Articulate", "Balanced", "Warm / Smooth", "High Output / Aggressive"],
        required: true,
      },
      {
        id: "current-setup",
        type: "text",
        question: "Tell us about your current guitar, amp, and pedals (optional)",
        placeholder: "E.g., Alder Strat, maple neck, Deluxe Reverb, light OD...",
      },
      {
        id: "special-requests",
        type: "text",
        question: "Any preferences or constraints? (e.g., magnet type, output, budget)",
        placeholder: "Alnico V, vintage output, RWRP middle, noiseless if possible...",
      },
      {
        id: "email",
        type: "text",
        question: "Your email address:",
        placeholder: "",
        required: true,
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setErrors((prev) => ({ ...prev, [questionId]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Validate required questions
      const missing = questions
        .filter((q) => q.required)
        .filter((q) => !answers[q.id] || String(answers[q.id]).trim() === "");

      if (missing.length > 0) {
        const nextErrors = missing.reduce((acc, q) => {
          acc[q.id] = true;
          return acc;
        }, {});
        setErrors((prev) => ({ ...prev, ...nextErrors }));
        // Focus first missing field if possible
        if (firstErrorRef.current) {
          firstErrorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      const payload = questions.map((q) => ({
        id: q.id,
        question: q.question,
        type: q.type,
        answer: answers[q.id] ?? null,
      }));

      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // Fallback: log for now if no consumer is provided
        // eslint-disable-next-line no-console
        console.log("Quiz submission:", payload);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full text-left space-y-8">
      {questions.map((q, idx) => {
        const hasError = Boolean(errors[q.id]);
        const wrapperProps = {};
        if (hasError && !firstErrorRef.current) {
          wrapperProps.ref = firstErrorRef;
        }
        return (
          <div key={q.id} className="space-y-3" {...wrapperProps}>
            <label className="block text-lg font-medium">
              {q.question}
              {q.required ? <span className="ml-1 text-red-300">*</span> : null}
            </label>
            {q.type === "mcq" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-3 rounded-lg border ${
                      hasError ? "border-red-400" : "border-white/20"
                    } bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition ${
                      answers[q.id] === opt ? "ring-2 ring-white/40" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                      className="accent-white"
                      required={q.required}
                      aria-invalid={hasError}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                rows={2}
                className={`w-full rounded-lg border ${
                  hasError ? "border-red-400" : "border-white/20"
                } bg-white/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/60`}
                placeholder={q.placeholder || "Type your answer..."}
                value={answers[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
                required={q.required || false}
                aria-invalid={hasError}
              />
            )}
            {hasError ? (
              <p className="text-xs text-red-300">This field is required.</p>
            ) : null}
          </div>
        );
      })}

      <div className="pt-2">
        <Button type="submit" disabled={isSubmitting} className="h-12">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}


