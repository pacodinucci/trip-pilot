import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200 to-emerald-900">
      <h1
        className={`${merriweather.className} text-4xl md:text-6xl font-semibold text-white drop-shadow-md logo font_shadow_xl`}
      >
        TRIP PLANNER
      </h1>
      {children}
    </div>
  );
}
