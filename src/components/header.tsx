import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header
      className={cn(
        "fixed top-10 left-1/2 transform -translate-x-1/2 px-10 py-5",
        "backdrop-blur-xl shadow-lg rounded-2xl text-center max-w-lg w-full",
        "border-4 border-transparent relative z-50 neon-border rounded-lg"
      )}
    >
      <h1 className="text-3xl font-extrabold text-white drop-shadow-md font-handlee">
        💖 Valentine’s Day 💖
      </h1>
    </header>
  );
}