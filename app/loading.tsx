export default function Loading() {
  return (
    <div className="w-full">
      <div className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 md:p-6 border flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl animate-pulse">
        <div className="w-full md:w-2/3">
          <div className="h-48 md:h-60 w-full bg-gray-200 dark:bg-neutral-800 rounded-xl" />
        </div>

        <div className="flex justify-between items-start flex-col gap-3 md:gap-4 w-full md:w-1/3">
          <div className="h-8 md:h-10 w-2/3 bg-gray-200 dark:bg-neutral-800 rounded" />

          <div className="h-6 md:h-7 w-full bg-gray-200 dark:bg-neutral-800 rounded" />

          <div className="space-y-2 w-full">
            <div className="h-4 w-full bg-gray-200 dark:bg-neutral-800 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-neutral-800 rounded" />
            <div className="h-4 w-4/6 bg-gray-200 dark:bg-neutral-800 rounded" />
          </div>

          <div className="h-8 md:h-10 w-32 md:w-40 bg-gray-300 dark:bg-neutral-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
