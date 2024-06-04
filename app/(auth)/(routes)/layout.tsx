export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-800">
      <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-md">
        TRIP PLANNER
      </h1>
      {children}
    </div>
  );
}
