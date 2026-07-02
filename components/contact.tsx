"use client";

import { useForm } from "@formspree/react";
import { useLanguage } from "@/components/language-provider";

// Replace YOUR_FORM_ID with the ID from formspree.io (e.g. "xyzabc12")
const FORMSPREE_ID = "mnjkopaa";

export function Contact() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section id="contact" className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left — info */}
        <div className="flex flex-col justify-center gap-6 text-white">
          <span className="text-xs uppercase tracking-widest text-white/40">
            {t.contact.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            {t.contact.heading}
          </h2>
          <p className="text-white/70 leading-relaxed">
            {t.contact.description}
          </p>
          <span className="text-sm text-white/40 tracking-wide">
            {t.contact.location}
          </span>
        </div>

        {/* Right — form */}
        <div>
          {state.succeeded ? (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <p className="text-white text-lg text-center">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  {t.contact.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.fields.namePlaceholder}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  {t.contact.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.fields.emailPlaceholder}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  {t.contact.fields.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.fields.messagePlaceholder}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              {state.errors && (
                <p className="text-red-400 text-sm">{t.contact.error}</p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-2 bg-white text-black font-semibold text-sm tracking-wide py-3 px-8 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
              >
                {state.submitting ? "..." : t.contact.fields.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
