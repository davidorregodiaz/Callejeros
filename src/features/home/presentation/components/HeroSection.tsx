export function HeroSection() {
  return (
    <div className="mt-5 @container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          data-alt="A happy golden retriever dog and a playful kitten sitting together in a sunny field."
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCat5qahQULuZ1HIL3qKaVkcUuLIVL6DXrXRDOmiKvo5XpgJxWmpGNmLIWF-eP9yLELHItu31Qk06LDdrw7jZjsmEyULuLMUWG-G0v5A_G_5MHTSv4GMofpz9FIgOUecVDITn1cDZbPpC7pZ2QwYRGymMrr_SqTgyRDky0v-ppdQPRgHR_vEUxYWveFzy0z18Nj2BtUDPwkXOj4cZGSrZqa9A2wiGI0UBrdAP0pOQxbwe7eFZWIZsahV5GWsyUN9aA68siO0TosJ84")'
          }}>
          <div className="flex flex-col gap-2 text-center max-w-2xl">
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Un hogar cambia dos vidas: la tuya y la de ellos
            </h1>
            <h2
              className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Nuestra misión es encontrar un hogar amoroso para cada animal rescatado. Únete a nosotros y cambia
              una vida para siempre.
            </h2>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Encuentra a tu amigo fiel</span>
          </button>
        </div>
      </div>
    </div>
  )
}