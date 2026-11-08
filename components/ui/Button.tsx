'use client';

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes, cloneElement, isValidElement, Children } from 'react';
import { cn } from '@/lib/utils';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseButtonProps & (
  | ({ asChild?: false } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & { type?: 'button' | 'submit' | 'reset' })
  | ({ asChild: true } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, asChild = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-btn transition-all duration-300 ease-spring focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-btn-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary shadow-btn-secondary',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary bg-transparent',
      ghost: 'text-primary hover:bg-primary/10 focus-visible:ring-primary bg-transparent',
    };

    const variantStyles = {
      primary: { color: '#FFFFFF' },
      secondary: { color: '#FFFFFF' },
      outline: {},
      ghost: {},
    };

    const sizes = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-3.5 text-body-md',
      lg: 'px-8 py-4 text-body-lg',
    };

    const isDisabled = disabled || loading;
    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className, isDisabled && 'pointer-events-none opacity-50');

    if (asChild) {
      // Proper slot pattern: clone the immediate child and merge props
      // This avoids nested <a> tags when children is already an <a> or <Link>
      const childArray = Children.toArray(children);
      const singleChild = childArray.length === 1 && isValidElement(childArray[0]) ? childArray[0] : null;

      const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;

      if (singleChild) {
        // Clone the child element (e.g., <a>, <Link>) and merge our props
        const childProps = singleChild.props as AnchorHTMLAttributes<HTMLAnchorElement>;
        const mergedHref = href ?? childProps.href;
        const mergedClassName = cn(combinedClassName, childProps.className);
        
        const mergedProps = {
          ref,
          href: mergedHref,
          className: mergedClassName,
          ariaDisabled: isDisabled ? true : undefined,
          tabIndex: isDisabled ? -1 : undefined,
          style: { ...childProps.style, ...variantStyles[variant] },
          ...anchorProps,
          ...childProps,
        };
        
        return cloneElement(singleChild as React.ReactElement<any>, mergedProps);
      }

      // Fallback: create an <a> element if no single valid child
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          aria-disabled={isDisabled ? true : undefined}
          tabIndex={isDisabled ? -1 : undefined}
          style={variantStyles[variant]}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const { type = 'button', ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'button' | 'submit' | 'reset' };

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isDisabled}
        style={variantStyles[variant]}
        {...buttonProps}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };