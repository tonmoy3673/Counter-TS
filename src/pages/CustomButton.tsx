interface ButtonProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  loading: boolean;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  className,
  onClick,
  loading,
}) => {
  return (
    <div className="text-center">
      <button className={`w-[130px] ${className}`} onAbort={onClick}>
        {loading ? "Loading.." : title}
      </button>
    </div>
  );
};

export default CustomButton;
