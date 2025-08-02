type ButtonOwnProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

type ButtonProps = ButtonOwnProps &
  Omit<React.ComponentProps<'button'>, keyof ButtonOwnProps>;

const variantClasses: Record<NonNullable<ButtonOwnProps['variant']>, string> = {
  primary:
    'bg-white text-black hover:bg-gray-600 hover:text-white transition-all',
  secondary:
    'bg-black text-white hover:bg-gray-600 hover:text-gray-100 transition-all',
};

function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, disabled, ...rest } = props;

  const baseClass = 'px-4 h-10 rounded-lg text-sm font-semibold cursor-pointer';
  const variantClass = variantClasses[variant];
  const disabledClass = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';
  const finalClassName = `${baseClass} ${variantClass} ${disabledClass} ${
    className ?? ''
  }`;

  return (
    <button className={finalClassName} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
