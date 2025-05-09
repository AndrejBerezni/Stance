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

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: AllowedInputTypes;
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
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="font-medium text-ink-700 text-sm">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute top-1/2 -translate-y-1/2 left-3.5 text-ink-500"
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
            'text-sm py-2.5 text-ink-900 bg-ink-50 placeholder:text-ink-500 disabled:text-ink-400 border-border rounded-md border-[1px] pr-8 focus:outline-[2px]  disabled:border-disabled ',
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
            aria-label="Clear input"
            onClick={clearInput}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-500 hover:cursor-pointer hover:text-ink-900"
          >
            <CircleX size={18} />
          </button>
        )}
      </div>
      <div className="h-5">
        {!error && hint && <p className="text-ink-500 text-sm">{hint}</p>}
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
    </div>
  );
}
