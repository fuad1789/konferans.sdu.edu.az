import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  children: ReactNode;
}

export function Badge({ className, variant = 'default', children }: BadgeProps) {
  const variants = {
    default: 'bg-blue-100 text-blue-700',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-200 text-gray-800',
    destructive: 'bg-red-100 text-red-700',
  };

  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors cursor-default", variants[variant], className)}>
      {children}
    </span>
  );
}
