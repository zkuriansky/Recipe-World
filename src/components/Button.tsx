interface ButtonProps {
  className: string;
  title: string;
  type: string;
  onClick: (title: string) => void;
}

const Button = (props: ButtonProps) => {
  const { className, title, type, onClick } = props;
  if (type === "filter") {
    return (
      <button className={className} onClick={() => onClick?.(title)}>
        {title}
      </button>
    );
  }
  return <button className={className}>{title}</button>;
};

export default Button;
