import type { SVGAttributes } from "react";

export default function BoltedNut(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 1024 768"
    >
      <path
        fill="#464a4f"
        d="M655.64 577.4 423.24 642l-155.4-184.47 76.99-249.07 232.39-64.61 155.41 184.48z"
      />
      <path
        fill="#acb1b7"
        d="m647.35 567.73-220.19 60.92L279.75 454.1l72.78-235.47 220.2-60.92 147.41 174.55z"
      />
      <circle fill="#464a4f" cx="496.06" cy="399.82" r="169.38" />
      <ellipse
        transform="rotate(-77.643 496.27 399.725)"
        fill="#acb1b7"
        cx="496.26"
        cy="399.71"
        rx="154.48"
        ry="156.38"
      />
    </svg>
  );
}
