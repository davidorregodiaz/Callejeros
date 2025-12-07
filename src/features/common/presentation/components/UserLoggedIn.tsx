type User = {
    id: string;
    imageUrl: string;
    email: string;
    role: string;
} & {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}

export const UserLoggedIn = ({ user, navigateTo }: { user?: User, navigateTo: (route: string) => void }) => {

  return (
    <div className="flex items-center gap-4">
      <div className="relative group border-none">
        <button
          aria-expanded="false"
          aria-haspopup="true"
          className="flex items-center gap-2"
        >
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-offset-2 ring-offset-surface-light dark:ring-offset-surface-dark ring-primary/50"
            data-alt="Avatar de usuario sonriendo"
            style={{
              backgroundImage: `url('${user?.imageUrl}')`,
            }}
          ></div>
        </button>
        <div
          aria-labelledby="menu-button"
          aria-orientation="vertical"
          className="absolute right-0 z-1000 mt-3 w-64 origin-top-right rounded bg-surface-light dark:bg-surface-dark shadow-lg ring-border-light focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          role="menu"
        >
          <div className="py-2 px-2 bg-white rounded" role="none">
            <div className="px-3 py-2">
              <p className="text-sm font-bold text-text-light dark:text-text-dark">
                {user?.name}
              </p>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">
                {user?.email}
              </p>
            </div>
            <hr className="border-t border-border-light dark:border-border-dark my-1" />
            <button
              onClick={() => navigateTo('/user/general')}
              className="flex items-center gap-3 rounded px-3 py-2 text-sm text-text-light dark:text-text-dark hover:bg-primary/20 hover:text-primary transition-colors"
              role="menuitem"
            >
              <span className="material-symbols-outlined text-base">
                person
              </span>
              Mi Perfil
            </button>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-sm text-text-light dark:text-text-dark hover:bg-primary/20 hover:text-primary transition-colors"
              href="#"
              role="menuitem"
            >
              <span className="material-symbols-outlined text-base">
                favorite
              </span>
              Mis Favoritos
            </a>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-sm text-text-light dark:text-text-dark hover:bg-primary/20 hover:text-primary transition-colors"
              href="#"
              role="menuitem"
            >
              <span className="material-symbols-outlined text-base">
                description
              </span>
              Mis Postulaciones
            </a>
            <hr className="border-t border-border-light dark:border-border-dark my-1" />
            <button
              // onClick={logout}
              className="flex items-center gap-3 rounded px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-400/20 transition-colors"
              role="menuitem"
            >
              <span className="material-symbols-outlined text-base">
                logout
              </span>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      <button className="md:hidden text-text-light dark:text-text-dark">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  );
};
