import { useState, useEffect } from "react";
import { useRegister } from "./../hooks/useRegister.js";
import { useNavigate } from "react-router-dom";

export function Step2() {
  const { data, setField, setAvatar, setProgressBar } = useRegister();
  const [username, setUsername] = useState(data.username || "");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.avatarFile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(data.avatarFile);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [data.avatarFile]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatar(file);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!username) {
      alert("El username es requerido");
      return;
    }
    setField("username", username);
    setProgressBar(3);
    navigate("../step3");
  };

  return (
    <form
      onSubmit={handleNext}
      className="flex flex-1 flex-col items-center justify-center py-10 animate-slide-in-right"
    >
      <div className="w-full max-w-md rounded-xl border border-primary/20 bg-white/50 dark:bg-background-dark/50 p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
          Casi listo! Completa tu perfil
        </h1>
        <p className="mt-2 text-sm text-text-light/80 dark:text-text-dark/80">
          Elige un avatar y un nombre de usuario para que todos te conozcan.
        </p>
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="relative group">
            <div className="size-32 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="material-symbols-outlined text-6xl text-primary/50">
                  person
                </span>
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <div className="text-center text-white">
                <span className="material-symbols-outlined text-3xl">
                  add_a_photo
                </span>
                <p className="text-xs font-semibold">Subir foto</p>
              </div>
            </div>
            <input
              onChange={handleFile}
              aria-label="Subir foto de perfil"
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
            />
          </div>
          <div className="w-full text-left">
            <label
              className="block text-sm font-medium text-text-light dark:text-text-dark mb-2"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light/50 dark:text-text-dark/50">
                alternate_email
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-lg border border-primary/30 bg-background-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-0"
                id="username"
                placeholder="Ej: AmanteDeMascotas123"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <button
            type="submit"
            className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">Siguiente</span>
          </button>
        </div>
      </div>
    </form>
  );
}
