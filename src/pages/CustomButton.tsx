interface ButtonProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: boolean;
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
      <button
        className={`w-[130px] py-2 rounded-md hover:bg-amber-600 duration-150 transition-all cursor-pointer text-white ${className}`}
        onClick={onClick}
      >
        {loading ? "Loading.." : title}
      </button>
    </div>
  );
};

export default CustomButton;
