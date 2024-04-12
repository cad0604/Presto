import React from "react";

import AuthLayout from "layouts/Auth";

import LoginForm from "components/auth/LoginForm";
import BrannTitle from "components/ui/typo/Title";
import BrannPaper from "components/ui/box/Paper";
import CenteredContainer from "components/ui/box/CenteredContainer";
import Box from "components/ui/box/Box";
import BrannLink from "components/ui/typo/Link";

export default function Login() {
  return (
    <AuthLayout>
      <CenteredContainer>
        <Box width={350}>
          <BrannTitle text="Login" align="center" />
          <BrannPaper>
            <LoginForm />
          </BrannPaper>
          <Box marginTop={16}>
            Don't have an account?{" "}
            <BrannLink href="/auth/register">
            Create an account here
            </BrannLink>
          </Box>
        </Box>
      </CenteredContainer>
    </AuthLayout>
  );
}
