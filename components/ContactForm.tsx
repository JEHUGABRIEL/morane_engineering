"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { getContent } from "@/lib/content";
import { getUi, localePath, type Locale } from "@/lib/i18n";

type FormValues = {
  name: string;
  organisation: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  organisation: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  budget: "",
  message: "",
};

type Errors = Partial<Record<keyof FormValues, string>>;

export function ContactForm({ locale }: { locale: Locale }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const [preparedMailto, setPreparedMailto] = useState("");
  const [copied, setCopied] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const t = getUi(locale).form;
  const { site } = getContent(locale);

  useEffect(() => {
    if (opened) successRef.current?.focus();
  }, [opened]);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) {
      next.name = t.errors.name;
    }
    if (values.message.trim().length < 20) {
      next.message = t.errors.message;
    }
    if (!values.projectType) {
      next.projectType = t.errors.projectType;
    }
    if (!values.email.trim() && !values.phone.trim()) {
      next.email = t.errors.email;
    }
    if (
      values.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())
    ) {
      next.email = t.errors.emailFormat;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMailto = () => {
    const subject =
      locale === "en"
        ? `Project enquiry — ${values.projectType} — ${values.name.trim()}`
        : `Demande de projet — ${values.projectType} — ${values.name.trim()}`;
    const labels =
      locale === "en"
        ? {
            name: "Name",
            organisation: "Organisation",
            phone: "Phone",
            email: "Email",
            projectType: "Project type",
            location: "Location",
            budget: "Estimated budget",
            message: "Message",
            intro: "Hello Morane Engineering,",
            outro: "— Sent from the morane-engineering.com website",
          }
        : {
            name: "Nom",
            organisation: "Organisation",
            phone: "Téléphone",
            email: "E-mail",
            projectType: "Type de projet",
            location: "Localisation",
            budget: "Budget envisagé",
            message: "Message",
            intro: "Bonjour Morane Engineering,",
            outro: "— Envoyé depuis le site morane-engineering.com",
          };

    const details = [
      `${labels.name} : ${values.name.trim()}`,
      values.organisation.trim()
        ? `${labels.organisation} : ${values.organisation.trim()}`
        : null,
      values.phone.trim() ? `${labels.phone} : ${values.phone.trim()}` : null,
      values.email.trim() ? `${labels.email} : ${values.email.trim()}` : null,
      `${labels.projectType} : ${values.projectType}`,
      values.location.trim()
        ? `${labels.location} : ${values.location.trim()}`
        : null,
      values.budget ? `${labels.budget} : ${values.budget}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const body = `${labels.intro}\n\n${details}\n\n${labels.message} :\n${values.message.trim()}\n\n${labels.outro}`;

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      requestAnimationFrame(() => {
        document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }
    const mailto = buildMailto();
    setPreparedMailto(mailto);
    setOpened(true);
    window.setTimeout(() => {
      window.location.href = mailto;
    }, 400);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  if (opened) {
    return (
      <div className="form-success" role="status" ref={successRef} tabIndex={-1}>
        <p className="form-success__index">{t.success.index}</p>
        <h2>{t.success.title}</h2>
        <p>{t.success.text}</p>
        <a className="form-success__mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="form-success__actions">
          <a className="btn" href={preparedMailto}>
            {t.success.open}
            <span aria-hidden="true">→</span>
          </a>
          <button type="button" className="text-link" onClick={copyEmail}>
            {copied ? t.success.copied : t.success.copy}
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => {
              setOpened(false);
              requestAnimationFrame(() => {
                document.getElementById("name")?.focus();
              });
            }}
          >
            {t.success.edit}
          </button>
        </div>
        <p className="form-success__note">
          {t.success.note}{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">
            {t.name} <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            aria-required="true"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p className="field__error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="organisation">{t.organisation}</label>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            value={values.organisation}
            onChange={(event) => update("organisation", event.target.value)}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="phone">{t.phone}</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="email">{t.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p className="field__error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="projectType">
            {t.projectType} <span aria-hidden="true">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            aria-required="true"
            onChange={(event) => update("projectType", event.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
          >
            <option value="">{t.choose}</option>
            {t.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="field__error" id="projectType-error">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="location">{t.location}</label>
          <input
            id="location"
            name="location"
            placeholder={t.locationPlaceholder}
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="budget">{t.budget}</label>
        <select
          id="budget"
          name="budget"
          value={values.budget}
          onChange={(event) => update("budget", event.target.value)}
        >
          <option value="">{t.notSpecified}</option>
          {t.budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">
          {t.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-required="true"
          placeholder={t.messagePlaceholder}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
        {errors.message ? (
          <p className="field__error" id="message-error">
            {errors.message}
          </p>
        ) : (
          <p className="field__hint" id="message-hint">
            {t.messageHint}
          </p>
        )}
      </div>

      <div className="form__footer">
        <p className="form__note">
          {t.note}{" "}
          <a href={localePath(locale, "/mentions-legales")}>{t.privacy}</a>
        </p>
        <button type="submit" className="btn form__submit">
          {t.submit}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
