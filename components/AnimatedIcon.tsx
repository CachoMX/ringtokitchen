'use client';

interface AnimatedIconProps {
  type: 'phone' | 'ai' | 'check' | 'sync';
  size?: number;
}

export default function AnimatedIcon({ type, size = 100 }: AnimatedIconProps) {
  const icons = {
    phone: (
      <div className="animate-swing">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-navy">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
    ),
    ai: (
      <div className="animate-spin-slow">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-energy-red">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      </div>
    ),
    check: (
      <div className="animate-bounce-slow">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-600">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
    ),
    sync: (
      <div className="animate-spin-slow">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-navy">
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
        </svg>
      </div>
    ),
  };

  return (
    <div className="flex items-center justify-center">
      {icons[type]}
    </div>
  );
}
