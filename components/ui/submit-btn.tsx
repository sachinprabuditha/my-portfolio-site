import React from "react";
import { Send, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group relative flex items-center justify-center gap-3 h-12 px-8 
                 bg-gradient-to-br from-cyan-600 via-cyan to-fuchsia-cyan 
                 hover:from-cyan-500 hover:via-cyan hover:to-cyan-500
                 text-white font-semibold rounded-2xl
                 shadow-lg shadow-cyan/25 hover:shadow-cyan/40
                 border border-black-300 backdrop-blur-md
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:-translate-y-0.5
                 active:scale-95 active:translate-y-0
                 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-transparent
                 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
                 overflow-hidden"
      disabled={pending}
    >
      {/* Animated background with shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100"></div>
      
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-cyan-800 backdrop-blur-sm opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 rounded-2xl"></div>
      
      {/* Button content */}
      <div className="relative z-10 flex items-center gap-3">
        {pending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm tracking-wide">Sending...</span>
          </>
        ) : (
          <>
            <span className="text-sm tracking-wide font-medium">Submit</span>
            <Send className="h-4 w-4 transition-all duration-300 ease-out 
                           group-hover:translate-x-1 group-hover:-translate-y-0.5 
                           group-hover:rotate-12" />
          </>
        )}
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-600 
                      opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10"></div>
    </button>
  );
}