interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  loading?: boolean;
 
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
  style,
  loading,
}) => {
  return (
    <div className="text-center">
      <button
        className={`${className}`}
        onClick={onClick}
        
        style={style}
      >
        {
            loading ? "Loading" : title
        }
      </button>
    </div>
  );
};

export default CustomButton;
