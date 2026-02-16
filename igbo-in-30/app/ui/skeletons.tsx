const shimmer =
  "before:content-[''] before:absolute before:inset-0 before:animate-[shimmer_2s_linear_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-[200%]";

export function EmbeddingPageSkeleton({quantity = 1}: {quantity?: number}){
  return (
    <div className="flex flex-col items-center">
        <div className={`${shimmer} relative overflow-hidden rounded-md mb-4 h-8 w-60 bg-gray-100 p-2 shadow-sm`} />

        <div className="flex flex-col items-center gap-6">
            {Array.from({ length: quantity }).map((_, i) => 
              <EmbeddingCardSkeleton key={i}/>
            )
          }
        </div>
      </div>
    );

}

export function EmbeddingCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 p-2 shadow-sm w-156`}
    >
      <div className="flex flex-col items-center rounded-md p-4">
        <div className="h-7 w-84 mb-4 rounded-md bg-gray-200" />
        <div className="h-80 w-144 rounded-md bg-gray-200" />
      </div>
  </div>
  );
}