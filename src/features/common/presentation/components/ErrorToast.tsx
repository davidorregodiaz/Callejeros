"use client";
import { useState } from "react";

const ErrorToast = ({ errorMessage }: { errorMessage: string }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);

  return (
    <div
      className={`fixed z-1000 top-4 right-4 max-w-sm animate-fade-in-left ${
        closeAnimation ? "animate-fade-out-left" : ""
      }`}
    >
      <div className="flex items-start gap-4 rounded-lg bg-[#fef2f2] p-4 shadow-lg ring-1 ring-[#fca5a5]/50">
        <div className="shrink-0">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#f87171] ">
            <span className="material-symbols-outlined text-white text-2xl">
              priority_high
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1">
          <p className="text-base font-medium text-[#b91c1c] ">
            Ocurrio un error
          </p>
          <p className="text-sm text-[#7f1d1d]">{errorMessage}</p>
        </div>
        <div className="shrink-0">
          <button
            onClick={() => setCloseAnimation(true)}
            className="flex size-7 items-center justify-center text-[#991b1b] hover:text-[#b91c1c] cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorToast;
