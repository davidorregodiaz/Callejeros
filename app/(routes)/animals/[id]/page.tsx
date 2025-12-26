import AnimalDetailsView from "@/src/features/animals/presentation/views/AnimalDetailsView";
import { AnimalViewModel } from "@/src/types/adoption";
import { getServerSession } from "next-auth";

interface PageProps {
  params: { id: string };
}

const Animal = async ({ params }: PageProps) => {
  const session = await getServerSession();
  const { id } = params;
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/animals/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  if (response.status === 404) {
    return <div>`Animal with id ${id} not found`</div>;
  }

  const animalVm: AnimalViewModel = await response.json();
  return <AnimalDetailsView animal={animalVm} session={session} />;
};

export default Animal;
