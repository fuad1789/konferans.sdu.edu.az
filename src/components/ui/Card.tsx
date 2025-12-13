import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return <div className={cn("p-6 pb-3", className)}>{children}</div>;
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ className, children }: CardProps) {
  return <div className={cn("p-6 pt-0 flex items-center", className)}>{children}</div>;
}
