import type { TitleProps } from "@components/bradCumps/title/types";
import { styles } from "@pages/components/subTitle/styles";
import { transformerInFirstWord } from "@utils/transfomerText";
import React from "react";
export const Title: React.FC<TitleProps> = ({ title, ...props }) => {
    return (
        <div  {...props}>
            <h1 className="text-uppercase font-weight-bold  text-light text-center">
                <span style={{
                    ...styles,
                    top: 0
                }}>
                    {transformerInFirstWord({ world: title })}
                </span>
                {title}
            </h1>
        </div>
    )
}