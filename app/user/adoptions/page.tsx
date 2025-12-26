import UserAdoptionsView from "@/src/features/user/presentation/views/UserAdoptionsView";
import { AnimalViewModel } from "@/src/types/adoption";
import { User } from "@/src/types/user";
import { Session } from "next-auth";

const UserAdoptions = async ({ session }: { session: Session | null }) => {
  const user: User = {
    id: session?.user.id ?? "",
    email: session?.user.email ?? "",
    imageUrl: session?.user.imageUrl ?? "",
    role: session?.user.role ?? "",
  };

  const url = process.env.NEXT_PUBLIC_API_URL ?? "localhost:3000/api";
  const userAdoptions: AnimalViewModel[] = await fetch(`${url}/user/adoptions`);

  return <UserAdoptionsView user={user} userAdoptions={userAdoptions} />;
};

export default UserAdoptions;
