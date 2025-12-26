import PetsIcon from "@mui/icons-material/PetsRounded";
import DescriptionIcon from "@mui/icons-material/DescriptionRounded";
import GroupsIcon from "@mui/icons-material/GroupsRounded";
import HomeIcon from "@mui/icons-material/HomeRounded";

const HowToAdoptSection = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-center mb-8">
        Adoptar es muy fácil
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary mb-3">
            <PetsIcon fontSize="medium" className="text-primary" />
          </div>
          <h3 className="font-bold">1. Encuentra tu mascota</h3>
          <p className="text-sm">
            Explora los perfiles de nuestros adorables animales y encuentra a tu
            compañero ideal.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary mb-3">
            <DescriptionIcon fontSize="medium" className="text-primary" />
          </div>
          <h3 className="font-bold">2. Completa el formulario</h3>
          <p className="text-sm">
            Llena una sencilla solicitud de adopción para que podamos conocerte
            mejor.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary mb-3">
            <GroupsIcon fontSize="medium" className="text-primary" />
          </div>
          <h3 className="font-bold">3. Conoce a tu amigo</h3>
          <p className="text-sm">
            Coordinaremos una visita para que puedas conocer en persona a tu
            futuro mejor amigo.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary mb-3">
            <HomeIcon fontSize="medium" className="text-primary" />
          </div>
          <h3 className="font-bold">4. Llévalo a casa</h3>
          <p className="text-sm">
            Una vez aprobado, formaliza la adopción y prepárate para una vida
            llena de amor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToAdoptSection;
