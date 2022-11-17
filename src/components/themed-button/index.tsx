import { Box, styled, ButtonProps } from "@mui/material";

export const ThemedButton = styled(Box)<
  ButtonProps & {
    size?: "small";
    target?: string;
    component: string;
  }
>((props) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  maxWidth: "max-content",
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.primary.superLight,
  padding: props.size === "small" ? "0.25rem 0.5rem" : "1rem 1.75rem",
  borderRadius: props.size === "small" ? "99px" : "1rem",
  fontWeight: props.size === "small" ? "400k" : "500",
  transition: "400ms",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: props.theme.palette.primary.dark,
  },
}));
