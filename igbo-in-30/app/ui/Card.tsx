type CardProps = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = " "}: CardProps){
  return (
    <div className={`
      flex flex-col 
      border border-gray-200
      shadow-sm
      rounded-md
      p-6
      ${className}
      `}
      >
        {children}
    </div>
  );
}