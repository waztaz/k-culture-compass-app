import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" className="text-primary/50" />
      <path d="m12 2 4 4-4 4-4-4Z" className="fill-primary text-primary" />
      <path d="M2 12h4" />
      <path d="m18 12h4" />
      <path d="m6 18 4-4" />
      <path d="m14 14 4 4" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="8"
        fontWeight="bold"
        className="fill-primary-foreground"
      >
        K
      </text>
    </svg>
  );
}
