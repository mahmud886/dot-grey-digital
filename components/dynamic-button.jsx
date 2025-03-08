const DynamicButton = ({
  children,
  onClick,
  width = 'sm:min-w-48',
  height = 'h-10 sm:h-12',
  padding = 'px-4 sm:px-5',
  fontSize = 'text-sm sm:text-base',
  fontWeight = 'font-semibold',
  isOutline = false,
  bgColor = 'bg-[var(--primary)]',
  textColor = '',
  borderRadius = 'rounded-full',
  className = '',
  svgIcon,
}) => {
  const isLightBg = bgColor.includes('bg-white') || bgColor.includes('bg-[#f') || bgColor.includes('bg-[#e]');
  const computedTextColor = textColor || (isLightBg ? 'text-black' : 'text-white');

  return (
    <button
      onClick={onClick}
      className={`
        ${borderRadius} ${fontWeight} transition-colors inline-flex items-center justify-center gap-2 cursor-grab
        ${fontSize} ${padding} ${width} ${height}
        ${
          isOutline
            ? `border border-solid border-black/[.08] dark:border-white/[.145] ${computedTextColor} hover:bg-[var(--primary)] hover:text-${
                isLightBg ? 'black' : 'white'
              } hover:border-transparent`
            : `${bgColor} ${computedTextColor}`
        } 
        ${className}
      `}>
      {children}
      {svgIcon && <span className='w-5 h-5'>{svgIcon}</span>}
    </button>
  );
};

export default DynamicButton;
