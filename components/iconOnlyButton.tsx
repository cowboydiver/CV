import * as React from "react";
import { Box } from "@chakra-ui/react";

interface IconOnlyButtonProps {
  icon: React.ReactNode;
  link?: string;
  bgColor?: string;
  color?: string;
  shadowColor?: string;
}

function IconOnlyButton({
  icon,
  link = "#",
  bgColor = "teal.600",
  color = "whitesmoke",
  shadowColor = "whitesmoke",
}: IconOnlyButtonProps) {
  return (
    <Box
      as="button"
      color={color}
      bg={bgColor}
      p={3}
      boxShadow={`2px 2px ${shadowColor}`}
    >
      {icon}
    </Box>
  );
}

export default IconOnlyButton;
