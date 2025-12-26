"use client";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import GridViewIcon from "@mui/icons-material/GridViewRounded";
import AssignmentIcon from "@mui/icons-material/AssignmentRounded";
import FavoriteIcon from "@mui/icons-material/FavoriteRounded";
import LockIcon from "@mui/icons-material/LockRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import LogoutIcon from "@mui/icons-material/LogoutRounded";

export type User = {
  id: string;
  username: string;
  imageUrl: string;
  email: string;
  role: string;
};

const ProfileLayout = ({ user }: { user: User }) => {
  const router = useRouter();
  const path = usePathname();

  const navigateTo = (route: string) => {
    router.replace(route);
  };

  return (
    <aside className="w-80 shrink-0 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center p-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt={`${user?.username}`}
              style={{
                backgroundImage: `url(${user?.imageUrl})`,
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-base font-medium leading-normal text-text-light dark:text-text-dark">
                {user?.username}
              </h1>
              <p className="text-sm font-normal leading-normal text-subtle-light dark:text-subtle-dark">
                {user?.email}
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <button
              className={
                path == "/user/general"
                  ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                  : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              }
              onClick={() => navigateTo("/user/general")}
            >
              <GridViewIcon
                fontSize="medium"
                className="text-text-light dark:text-text-dark"
              />
              <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                General
              </p>
            </button>
            {user.role == "Owner" ? (
              <button
                className={
                  path == "/user/adoptions"
                    ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                    : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                }
                onClick={() => navigateTo("/user/adoptions")}
              >
                <FavoriteIcon
                  fontSize="medium"
                  className="text-text-light dark:text-text-dark"
                />
                <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                  Mis Adopciones
                </p>
              </button>
            ) : (
              ""
            )}
            <button
              className={
                path == "/user/requests"
                  ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                  : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              }
              onClick={() => navigateTo("/user/requests")}
            >
              <AssignmentIcon
                fontSize="medium"
                className="text-text-light dark:text-text-dark"
              />
              <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                Solicitudes
              </p>
            </button>
            <button
              className={
                path == "/user/password"
                  ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                  : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              }
              onClick={() => navigateTo("/user/password")}
            >
              <LockIcon
                fontSize="medium"
                className="text-text-light dark:text-text-dark"
              />
              <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                Cambiar Contraseña
              </p>
            </button>
            <button
              className={
                path == "/user/edit"
                  ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                  : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              }
              onClick={() => navigateTo("/user/edit")}
            >
              <PersonIcon
                fontSize="medium"
                className="text-text-light dark:text-text-dark"
              />
              <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                Actualizar Perfil
              </p>
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => navigateTo("/home")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <ArrowBackIcon
              fontSize="medium"
              className="text-text-light dark:text-text-dark"
            />

            <p
              className="text-sm font-medium leading-normal text-text-light dark:text-text-dark"
              style={{ cursor: "pointer" }}
            >
              Volver a inicio
            </p>
          </button>
          <button
            onClick={() => signOut({ callbackUrl: process.env.NEXTAUTH_URL })}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <LogoutIcon
              fontSize="medium"
              className="text-text-light dark:text-text-dark"
            />
            <p
              className="text-sm font-medium leading-normal text-text-light dark:text-text-dark"
              style={{ cursor: "pointer" }}
            >
              Cerrar Sesión
            </p>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileLayout;
