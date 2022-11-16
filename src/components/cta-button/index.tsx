import { styled, Theme } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface ICTAButtonProps {
  href: string;
  small?: boolean;
  children: ReactNode;
  target?: string | undefined;
  type?: string | undefined;
}

export const CTAButton = ({
  small = false,
  href,
  children,
  target = undefined,
  type = undefined,
}: ICTAButtonProps) => {
  const LinkButton = styled("a")(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    maxWidth: "max-content",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.superLight,
    padding: small ? "0.25rem 0.5rem" : "1rem 1.75rem",
    borderRadius: small ? "99px" : "1rem",
    fontWeight: small ? "400k" : "500",
    transition: "400ms",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  return (
    <LinkButton href={href} target={target ? target : undefined} type="submit">
      {children}
    </LinkButton>
  );
};
