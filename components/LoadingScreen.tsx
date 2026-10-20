import Image from "next/image";

type LoadingScreenProps = {
  label?: string;
};

export function LoadingScreen({
  label = "Chargement du site",
}: LoadingScreenProps) {
  return (
    <section
      className="loading-screen"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className="loading-screen__slash" aria-hidden="true" />
      <div className="loading-screen__mark">
        <Image
          src="/logo-marque.png"
          alt=""
          width={120}
          height={120}
          priority
        />
      </div>
      <p className="loading-screen__brand">
        MORANE <span>ENGINEERING</span>
      </p>
      <div className="loading-screen__bar" aria-hidden="true">
        <span />
      </div>
      <p className="loading-screen__label">{label}</p>
    </section>
  );
}
