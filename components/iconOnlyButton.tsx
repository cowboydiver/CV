import * as React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
    <motion.div whileHover={{ scale: 1.2 }}>
      <Box
        as="button"
        color={color}
        bg={bgColor}
        p={2}
        w={{ base: "64px", md: "48px" }}
        h={{ base: "64px", md: "48px" }}
        boxShadow={{
          base: `4px 4px ${shadowColor}`,
          md: `2px 2px ${shadowColor}`,
        }}
      >
        {icon}
      </Box>
    </motion.div>
  );
}

export default IconOnlyButton;
