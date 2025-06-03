import { styles } from "@components/bradCumps/title/styles";
import type { TitleProps } from "@components/bradCumps/title/types";
import React from "react";
import { Card } from "react-bootstrap";
export const Title: React.FC<TitleProps> = ({ title, ...props }) => {
    return (
        <div  {...props}>
            <Card.Title className="text-uppercase font-weight-bold  text-light text-center">
                <span style={{
                    ...styles,
                    top: 0
                }}>
                    {title}
                </span>
                {title}
            </Card.Title>
        </div>
    )
}