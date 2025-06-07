'use client';
import { InputHTMLAttributes } from 'react';

import { CircleX } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

type AllowedInputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'tel'
  | 'url'
  | 'search';

// Some of the props are already input attributes, but we are adding them to props to enforce using them
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: AllowedInputTypes;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  clearInput: () => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ElementType;
  hint?: string;
  error?: string;
  className?: string;
}

export default function TextInput({
  id,
  type = 'text',
  name,
  value,
  onValueChange,
  clearInput,
  label,
  placeholder,
  disabled = false,
  icon: Icon,
  hint,
  error,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className="flex w-full flex-col">
      {label && (
        <label htmlFor={id} className="text-ink-700 text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative w-full">
        {Icon && (
          <Icon
            className="text-ink-500 absolute top-1/2 left-3.5 -translate-y-1/2"
            size={18}
          />
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'text-ink-900 bg-ink-50 placeholder:text-ink-500 disabled:text-ink-400 border-border disabled:border-disabled w-full rounded-md border-[1px] py-2.5 pr-8 text-sm focus:outline-[2px]',
            {
              'pl-10': Icon,
              'pl-3.5': !Icon,
              'focus:border-destructive focus:outline-destructive/12': error,
              'focus:border-primary focus:outline-primary/12': !error,
            },
            className
          )}
          {...props}
        />
        {value.length > 0 && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={clearInput}
            className="text-ink-500 hover:text-ink-900 absolute top-1/2 right-2 -translate-y-1/2 hover:cursor-pointer"
          >
            <CircleX size={18} />
          </button>
        )}
      </div>
      {!error && hint && <p className="text-ink-500 text-sm">{hint}</p>}
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
