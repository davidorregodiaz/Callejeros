"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginDTO, LoginSchema } from "../validations/login_schema";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
    const { email, password } = data;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.log(result.error);
      //setError(result.error);
    } else {
      //setError(null);
      navigateTo("/home");
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row min-h-screen">
            <div
              className="flex-1 bg-cover bg-center hidden md:block"
              data-alt="A happy golden retriever dog and a playful kitten sitting together in a sunny field."
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCat5qahQULuZ1HIL3qKaVkcUuLIVL6DXrXRDOmiKvo5XpgJxWmpGNmLIWF-eP9yLELHItu31Qk06LDdrw7jZjsmEyULuLMUWG-G0v5A_G_5MHTSv4GMofpz9FIgOUecVDITn1cDZbPpC7pZ2QwYRGymMrr_SqTgyRDky0v-ppdQPRgHR_vEUxYWveFzy0z18Nj2BtUDPwkXOj4cZGSrZqa9A2wiGI0UBrdAP0pOQxbwe7eFZWIZsahV5GWsyUN9aA68siO0TosJ84")',
              }}
            >
              <div className="flex items-end h-full p-10 bg-linear-to-t from-black/50 to-transparent">
                <div className="max-w-md text-white">
                  <h1 className="text-4xl font-bold">Bienvenido de nuevo</h1>
                  <p className="mt-2">
                    Gracias por ayudar a nuestros amigos peludos a encontrar un
                    hogar para siempre.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center p-6 md:p-12 lg:p-16 animate-slide-in-right">
              <div className="w-full max-w-md">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <div className="size-8 text-primary">
                      <svg
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">
                      Callejeros
                    </h2>
                  </div>
                  <h3 className="text-3xl font-bold">Inicia Sesión</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80 mt-2">
                    Ingresa tus datos para continuar
                  </p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="text-sm font-medium" htmlFor="Email">
                      Email
                    </label>
                    <input
                      className="mt-1 p-1 w-full rounded-lg border-2 border-gray-300/50 bg-background-light focus:border-primary  outline-0"
                      id="email"
                      placeholder="tu@email.com"
                      type="email"
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium" htmlFor="Password">
                        Contraseña
                      </label>
                      <a
                        className="text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        ¿Olvidé mi contraseña?
                      </a>
                    </div>
                    <input
                      className="mt-1 p-1 w-full rounded-lg border-2 border-gray-300/50  bg-background-light  focus:border-primary focus:ring-primary outline-0"
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      {...register("password")}
                    />
                  </div>
                  <button
                    className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
                    type="submit"
                  >
                    <span className="truncate">Iniciar Sesión</span>
                  </button>
                </form>
                <div className="my-6 flex items-center">
                  <div className="grow border-t border-gray-300/50 dark:border-gray-700/50"></div>
                  <span className="mx-4 text-sm text-text-light/70 dark:text-text-dark/70">
                    O continúa con
                  </span>
                  <div className="grow border-t border-gray-300/50 dark:border-gray-700/50"></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-700/50 px-4 py-2.5 text-sm font-medium hover:bg-primary/10">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                      <path d="M1 1h22v22H1z" fill="none"></path>
                    </svg>
                    Google
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-700/50 px-4 py-2.5 text-sm font-medium hover:bg-primary/10">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                    Facebook
                  </button>
                </div>
                <p className="mt-8 text-center text-sm">
                  ¿No tienes una cuenta?
                  <button
                    className="font-semibold text-primary hover:underline"
                    onClick={() => navigateTo("/register")}
                  >
                    Crear una cuenta
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
