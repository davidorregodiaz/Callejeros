"use client";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { User, UserLoggedIn } from "../presentation/components/UserLoggedIn";

export function Navbar({ session }: { session: Session | null }) {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const user: User = {
    id: session?.user.id ?? "",
    email: session?.user.email ?? "",
    imageUrl: session?.user.imageUrl ?? "",
    role: session?.user.role ?? "",
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-4 md:px-10 py-3">
      <button
        onClick={() => navigateTo("/")}
        className="flex items-center gap-4 text-text-light dark:text-text-dark"
      >
        <div className="size-6 text-primary">
          <svg
            className="text-primary"
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          Callejeros
        </h2>
      </button>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <button
            onClick={() => navigateTo("/adoptions")}
            className="text-sm font-medium leading-normal hover:text-primary"
          >
            Adoptar
          </button>
          <a
            className="text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            Cómo Ayudar
          </a>
          <a
            className="text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            Nosotros
          </a>
          <a
            className="text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            Blog
          </a>
        </div>

        {session ? (
          <UserLoggedIn user={user} navigateTo={navigateTo} />
        ) : (
          <button
            onClick={() => navigateTo("/auth/login")}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Inicia Sesion</span>
          </button>
        )}
      </div>
      <button className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 text-text-light dark:text-text-dark">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
