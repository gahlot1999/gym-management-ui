type TextOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

function Text<E extends React.ElementType = 'div'>(props: TextProps<E>) {
  const { children, as = 'div', ...rest } = props;

  const Component = as;

  return <Component {...rest}>{children}</Component>;
}

export default Text;
