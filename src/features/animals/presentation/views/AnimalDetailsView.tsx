"use client";
import AdoptionRequestFormModal from "../components/AdoptionRequestFormModal";
import { AnimalViewModel, Sex } from "@/src/types/adoption";
import { useState } from "react";
import { Session } from "next-auth";

const AnimalDetailsView = ({
  animal,
  session,
}: {
  animal: AnimalViewModel;
  session: Session;
}) => {
  const [adoptionForm, setAdoptionForm] = useState(false);
  const personalityLabels = {
    Playful: "Juguetón",
    Calm: "Tranquilo",
    Shy: "Tímido",
    Energetic: "Enérgico",
    Warm: "Cariñoso",
  };

  const compatibilityLabels = {
    Childs: "Niños",
    Dogs: "Otros perros",
    Cats: "Gatos",
  };

  const sizeLabels = {
    Small: "Pequeño",
    Medium: "Mediano",
    Big: "Grande",
  };

  return (
    <>
      {adoptionForm ? (
        <AdoptionRequestFormModal
          animalId={animal.id}
          animalName={animal.name}
          onClose={() => setAdoptionForm(false)}
        />
      ) : (
        ""
      )}
      <div className="mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div
              className="aspect-square w-full bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url("${animal.principalImageUrl}")`,
              }}
            ></div>
            <div className="grid grid-cols-3 gap-4">
              {animal.extraImagesUrls && animal.extraImagesUrls.length > 0 ? (
                animal.extraImagesUrls.slice(0, 3).map((imgUrl, index) => (
                  <div
                    key={index}
                    className="aspect-square w-full bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url("${imgUrl}")`,
                    }}
                  ></div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              {animal.name}
            </h1>
            <p className="text-accent text-lg font-medium mt-1">
              {animal.species}, {animal.sex === Sex.FEMALE ? "Hembra" : "Macho"}
              , {animal.age} años
            </p>
            <div className="mt-6 border-t border-primary/20 pt-6">
              <h2 className="text-xl font-bold mb-3">Sobre {animal.name}</h2>
              <p className="text-base leading-relaxed">{animal.description}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">
                  Raza
                </h3>
                <p>{animal.breed}</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">
                  Tamaño
                </h3>
                <p>animal.size</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">
                  Personalidad
                </h3>
                <p>animal.size</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">
                  Compatible con
                </h3>
                <p>
                  <p>{animal.compatibility.join(", ")}</p>
                </p>
              </div>
            </div>
            {session.user?.id !== animal.ownerId ? (
              <button
                onClick={() => setAdoptionForm(true)}
                className="w-full mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="material-symbols-outlined mr-2">favorite</span>
                <span className="truncate">¡Adóptame!</span>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 mb-4">
              Historial Médico
            </h2>
            <ul className="space-y-2 list-disc list-inside text-base">
              <li>
                <span className="font-semibold">Vacunas:</span>{" "}
                {animal.medicalRecord.vaccine}
              </li>
              <li>
                <span className="font-semibold">Desparasitación:</span>{" "}
                {animal.medicalRecord.isDewormed ? "Realizada" : "No realizada"}
              </li>
              <li>
                <span className="font-semibold">Esterilización:</span>{" "}
                {animal.medicalRecord.isSterilized
                  ? "Sí, castrado."
                  : "No castrado."}
              </li>
              <li>
                <span className="font-semibold">Estado de salud:</span>{" "}
                {animal.medicalRecord.healthState}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 mb-4">
              Requisitos de Adopción
            </h2>
            <ul className="space-y-2 list-disc list-inside text-base">
              {animal.adoptionRequirements &&
              animal.adoptionRequirements.length > 0
                ? animal.adoptionRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalDetailsView;
