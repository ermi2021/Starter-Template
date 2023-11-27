import { BoxProps } from "@chakra-ui/react";

export interface SidebarProps extends BoxProps {
    onCloseSidebar: () => void;
};