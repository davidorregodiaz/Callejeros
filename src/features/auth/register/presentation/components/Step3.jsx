import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Spinner } from "../../../shared/ui/Spinner";
import { useNavigate } from "react-router-dom";
import { ErrorToast } from "../../../shared/ui/ErrorToast";

export function Step3() {
  const { data, setField, submitRegistration, setProgressBar } = useRegister();
  const [role, setRole] = useState(data.role || "");
  const [selectedRole, setSelectedRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorToast, setErrorToast] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      alert("Elige si quieres adoptar o dar en adopción");
      return;
    }

    try {
      setLoading(true);
      const result = await submitRegistration();
      console.log("Registrado:", result);
      setSuccess(true);
    } catch (err) {
      setErrorToast(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    setProgressBar(4);
    navigate("../completed");
  }

  // if (errorToast) return <ErrorToast errorMessage={errorToast} />;

  if (loading) return <Spinner />;

  return (
    <>{errorToast && (
        <ErrorToast errorMessage={errorToast}/>
      )}
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 flex-col items-center justify-center p-4 animate-slide-in-right"
    >
      
      <div className="w-full max-w-lg rounded-xl border border-stone-200/80  bg-white shadow-sm p-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-text-light">
          Casi listo! Elige tu rol
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          Selecciona como quieres participar en nuestra comunidad para
          personalizar tu experiencia.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            onClick={() => {
              setRole("owner");
              setField("role", "owner");
              setSelectedRole("owner");
            }}
            className={`${
              selectedRole === "owner"
                ? "border-primary"
                : "border-stone-200/80"
            } flex select-none flex-col items-center justify-between rounded-lg border p-6 transition-all hover:shadow-lg cursor-pointer hover:border-primary`}
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  volunteer_activism
                </span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-text-light dark:text-text-dark">
                Dar en Adopcion
              </h2>
              <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">
                Ayuda a un animalito a encontrar un hogar seguro y lleno de amor
                publicando su perfil.
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setRole("requester");
              setField("role", "requester");
              setSelectedRole("requester");
            }}
            className={`${
              selectedRole === "requester"
                ? "border-primary"
                : "border-stone-200/80"
            } flex select-none flex-col items-center justify-between rounded-lg border p-6 transition-all hover:shadow-lg cursor-pointer hover:border-primary`}
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full  text-primary">
                <span className="material-symbols-outlined text-3xl">pets</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-text-light dark:text-text-dark">
                Adoptar
              </h2>
              <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">
                Encuentra a tu nuevo mejor amigo y dale la oportunidad de tener
                una vida feliz y plena.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white border border-border-primary rounded cursor-pointer
            hover:bg-primary/90 transition-colors"
          >
            Finalizar registro
          </button>
        </div>
      </div>
      </form>
      </>
  );
}
