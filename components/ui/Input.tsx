'use client';

import { forwardRef, InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn('w-full px-4 py-3.5 text-body-md text-text bg-white border border-border rounded-btn placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:border-focus focus:ring-2 focus:ring-secondary/20', className)}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn('block text-body-sm font-medium text-text mb-2', className)} {...props} />
  )
);
Label.displayName = 'Label';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn('w-full px-4 py-3.5 text-body-md text-text bg-white border border-border rounded-btn placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:border-focus focus:ring-2 focus:ring-secondary/20 resize-none min-h-[120px]', className)}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => (
    <select
      ref={ref}
      className={cn('w-full px-4 py-3.5 text-body-md text-text bg-white border border-border rounded-btn transition-all duration-200 focus:outline-none focus:border-focus focus:ring-2 focus:ring-secondary/20 appearance-none bg-[url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236B6E85%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")] bg-[length:1.5rem_1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-10', className)}
      {...props}
    />
  )
);
Select.displayName = 'Select';