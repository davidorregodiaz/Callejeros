import ProfileLayout, {
  User,
} from "@/src/features/common/layouts/ProfileLayout";
import { authOptions } from "@/src/utils/auth_options";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  const user: User = {
    id: session?.user.id ?? "",
    username: session?.user.name ?? "",
    email: session?.user.email ?? "",
    imageUrl: session?.user.imageUrl ?? "",
    role: session?.user.role ?? "",
  };

  return (
    <div className="font-display bg-white dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="flex h-full min-h-screen">
          <ProfileLayout user={user} />
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <main className="grow">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
