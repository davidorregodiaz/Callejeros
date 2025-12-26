"use client";

import { useEffect, useState } from "react";
import ErrorToast from "@/src/features/common/presentation/components/ErrorToast";
import { ErrorInfo } from "react-dom/client";

const AdoptionRequestFormModal = ({
  onClose,
  animalName,
  animalId,
}: {
  animalName: string;
  animalId: string;
  onClose: () => void;
}) => {
  const [comments, setComments] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = async (e: KeyboardEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.BACKEND_API_URL}/adoptions`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments, animalId }),
      });

      if (res && res.ok === false) {
        const text = await res.text();
        throw new Error(text || "Error al enviar la solicitud");
      }
      setSuccess(true);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      const message: string = "Ocurrió un error";

      // Intentar parsear si el error es JSON
      // try {
      //   const parsed = JSON.parse(err);
      //   message =
      //     parsed.detail ||
      //     parsed.title ||
      //     parsed.type ||
      //     "Ocurrió un error inesperado";
      // } catch {
      //   // Si no es JSON, usa mensaje genérico
      //   message = err.message;
      // }

      setError(message);
    }
  };

  const buttonClass = `flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] transition-colors ${
    success
      ? "bg-emerald-600 hover:bg-emerald-700"
      : "bg-primary hover:bg-primary/80"
  } ${isLoading ? "opacity-80 cursor-wait" : ""}`;

  return (
    <>
      {error && <ErrorToast errorMessage={error} />}
      <div className="font-display fixed inset-0 z-999 pointer-events-none">
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 dark:bg-black/60 p-4 pointer-events-auto"
          onClick={onClose}
        >
          <div
            className="relative flex flex-col w-full max-w-lg bg-background-light dark:bg-background-dark rounded-xl shadow-2xl pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200/50 text-gray-600 hover:bg-gray-200  transition-colors"
              aria-label="Cerrar"
              type="button"
            >
              <span
                className="material-symbols-outlined text-xl"
                data-icon="close"
              >
                close
              </span>
            </button>

            <div className="flex flex-col items-center p-8 sm:p-10">
              <div className="w-full max-w-sm text-center">
                {/* Title */}
                <div className="pb-6">
                  <h2 className="text-[#0d1b12] tracking-light text-2xl sm:text-3xl font-bold leading-tight">
                    {success
                      ? "Gracias por enviarnos tu solicitud"
                      : `Muestra tu interés por ${animalName}`}
                  </h2>
                </div>

                {/* Success state: message + Close button */}
                {success ? (
                  <>
                    <div className="px-4 pb-6">
                      <p className="text-sm font-normal leading-normal text-center">
                        Espere a que el dueño lo contacte
                      </p>
                    </div>
                    <div className="pt-2 px-4 w-full">
                      <button
                        onClick={onClose}
                        className={`${buttonClass} transition-colors`}
                        type="button"
                      >
                        <span>Cerrar</span>
                      </button>
                    </div>
                  </>
                ) : (
                  /* Form state */
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 w-full"
                  >
                    <label className="flex flex-col text-left">
                      <p className="text-[#0d1b12]  text-base font-medium leading-normal pb-2">
                        {`¿Por qué eres el hogar perfecto para ${animalName}?`}
                      </p>
                      <textarea
                        name="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d1b12]  focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfe7d7]  bg-background-light   min-h-36 placeholder:text-[#4c9a66]  p-[15px] text-base font-normal leading-normal transition-shadow"
                        placeholder="Cuéntanos un poco sobre ti, tu hogar y por qué quieres adoptarlo."
                      />
                    </label>

                    <div className="pt-2">
                      <button
                        className={`${buttonClass} transition-all`}
                        type="submit"
                        disabled={isLoading}
                        aria-disabled={isLoading}
                      >
                        {isLoading && (
                          <svg
                            className="animate-spin h-4 w-4 mr-3 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                        )}
                        <span>Enviar solicitud</span>
                      </button>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm font-normal leading-normal text-center">
                        Gracias por tu interés. El equipo del refugio revisará
                        tu mensaje y se pondrá en contacto contigo.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdoptionRequestFormModal;
