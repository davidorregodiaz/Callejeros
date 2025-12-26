import { AnimalViewModel } from "@../../../src/types/adoption";
import { PetCard } from "@/src/features/home/presentation/components/PetCard";

const Animals = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/animals`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  if (response.status === 204) {
    return <div>No hay ninguna adopcion listada aun</div>;
  }

  const animals: AnimalViewModel[] = await response.json();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {animals?.map((d) => (
          <PetCard key={d.id} pet={d} />
        ))}
      </div>
    </div>
  );
};

export default Animals;
