//import { UserRegistrationProgressBar } from "../components/UserRegistrationProgressBar";
import { ReactNode } from "react";

function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg mx-auto py-10 d-flex flex-col min-h-screen justify-center items-center">
      {/* <UserRegistrationProgressBar /> */}
      {children}
    </div>
  );
}
