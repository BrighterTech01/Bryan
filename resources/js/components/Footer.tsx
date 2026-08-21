import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-3 text-center">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              Bryan Jay<span className="text-violet-600">.</span>
            </span>

            <span className="text-sm text-gray-400">|</span>

            <span className="text-sm text-gray-500">
              Software Engineer
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with
            <Heart
              size={14}
              className="text-red-500 fill-red-500"
            />
            &copy; {currentYear}
          </p>

        </div>
      </div>
    </footer>
  );
}