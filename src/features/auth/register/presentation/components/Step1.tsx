"use client";

import { useForm } from "react-hook-form";
import { Step1DTO, Step1Schema } from "../validations/step1_schema";
import { zodResolver } from "@hookform/resolvers/zod";

type Step1Props = {
  onSubmit: (data: Step1DTO) => void;
  defaultValues: Step1DTO;
};

export function Step1({ onSubmit, defaultValues }: Step1Props) {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm<Step1DTO>({
    resolver: zodResolver(Step1Schema),
    defaultValues,
  });

  const onSubmitForm = (data: Step1DTO) => {
    onSubmit(data);
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-10 sm:py-20 animate-slide-in-right">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-solid border-primary/20 bg-white dark:bg-background-dark/50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">
              Crea tu cuenta
            </h1>
            <p className="mt-2 text-sm text-text-light/70 dark:text-text-dark/70">
              Estas a un paso de encontrar a tu nuevo mejor amigo.
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label
                className="text-sm font-medium text-text-light dark:text-text-dark"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <div className="relative mt-2">
                <span className="material-symbols-outlined pointer-events-none absolute left-0 inset-y-2 pl-3 text-text-light/50 dark:text-text-dark/50">
                  mail
                </span>

                <input
                  className="w-full outline-0 rounded-lg border border-solid border-primary/30 bg-background-light/50 dark:bg-background-dark/30 py-2.5 pl-10 pr-4 text-sm text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 focus:border-primary focus:ring-primary"
                  id="email"
                  placeholder="tu@correo.com"
                  type="email"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <label
                className="text-sm font-medium text-text-light dark:text-text-dark"
                htmlFor="password"
              >
                Contrase\u00f1a
              </label>
              <div className="relative mt-2">
                <span className="material-symbols-outlined pointer-events-none absolute inset-y-2 left-0 flex items-center pl-3 text-text-light/50 dark:text-text-dark/50">
                  lock
                </span>
                <input
                  className="w-full outline-0 rounded-lg border border-solid border-primary/30 bg-background-light/50 dark:bg-background-dark/30 py-2.5 pl-10 pr-4 text-sm text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 focus:border-primary focus:ring-primary"
                  id="password"
                  placeholder="Crea una contrasena segura"
                  type="password"
                  {...register("password")}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-primary/50 bg-background-light text-primary focus:ring-primary"
                  id="terms"
                  name="terms"
                  type="checkbox"
                />
                <label
                  className="ml-2 block text-xs text-text-light/80 dark:text-text-dark/80"
                  htmlFor="terms"
                >
                  Acepto los{" "}
                  <a
                    className="font-medium text-primary hover:underline"
                    href="#"
                  >
                    Terminos y Condiciones
                  </a>
                </label>
              </div>
            </div>
            <button
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              type="submit"
            >
              <span className="truncate">Siguiente</span>
            </button>
            <div className="text-center">
              <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                ¿Ya tienes una cuenta?{" "}
                <a
                  className="font-medium text-primary hover:underline"
                  href="#"
                >
                  Inicia sesión
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
