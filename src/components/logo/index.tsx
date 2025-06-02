import type { LogoProps } from "@components/logo/types";
import { logo } from "@flavor/assets";
import type React from "react";
import { Image } from "react-bootstrap";
export const Logo: React.FC<LogoProps> = ({
    width = '15%', height = '100%', ...props
}) => {
    return (
        <Image {...props} src={logo} width={width} height={height} />
    )
}