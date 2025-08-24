interface ButtonProps {
  title: string;
  onClick: () => void;
  className: string;
  style: React.CSSProperties;
  loading: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
  style,
  loading,
}) => {
  return (
    <div>
      <button
        className={`${className}`}
        onClick={onClick}
        disabled={loading}
        style={style}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
