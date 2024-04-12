import React from "react";
import AuthLayout from "layouts/Auth";
import BrannTitle from "components/ui/typo/Title";
import BrannPaper from "components/ui/box/Paper";
import CenteredContainer from "components/ui/box/CenteredContainer";
import Box from "components/ui/box/Box";
import RegisterForm from "components/auth/RegisterForm";

export const RegisterDataContext = React.createContext(null);

export default function Register() {
  
  return (
    <AuthLayout>
      <CenteredContainer>
        <Box width={530}>
          <BrannTitle text="Registe Account" align="center" />
          <BrannPaper>
            <RegisterForm />
          </BrannPaper>
        </Box>
      </CenteredContainer>
    </AuthLayout>
  );
}
