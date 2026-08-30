type IconProps = { className?: string };

const common = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function DeityIcon({ className }: IconProps) {
  // eight-point rosette — a restrained nod to the Mesopotamian star/divine emblem
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="M12 3 L13.4 9.4 L12 12 L10.6 9.4 Z" />
      <path d="M12 21 L13.4 14.6 L12 12 L10.6 14.6 Z" />
      <path d="M3 12 L9.4 10.6 L12 12 L9.4 13.4 Z" />
      <path d="M21 12 L14.6 10.6 L12 12 L14.6 13.4 Z" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

export function DivineGroupIcon({ className }: IconProps) {
  // an assembly — three linked figures
  return (
    <svg {...common} className={className} aria-hidden="true">
      <circle cx="12" cy="5.5" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M12 7.5 L6 15.2 M12 7.5 L18 15.2 M8 17 L16 17" />
    </svg>
  );
}

export function StoryIcon({ className }: IconProps) {
  // an open tablet / book
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="M12 6.5 C10 5.2 7.5 4.8 4 5 V17.5 C7.5 17.3 10 17.7 12 19" />
      <path d="M12 6.5 C14 5.2 16.5 4.8 20 5 V17.5 C16.5 17.3 14 17.7 12 19" />
      <path d="M12 6.5 V19" />
    </svg>
  );
}

export function AncientTextIcon({ className }: IconProps) {
  // a tablet with wedge-marks
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x="4.5" y="4" width="15" height="16" rx="1.2" />
      <path d="M8 9 L11 8.4 M8 12 L12.5 11.4 M8 15 L10.5 14.5" />
    </svg>
  );
}

export function TopicIcon({ className }: IconProps) {
  // concentric circles — an idea radiating outward
  return (
    <svg {...common} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 2.6 V5 M12 19 V21.4 M2.6 12 H5 M19 12 H21.4" />
    </svg>
  );
}
