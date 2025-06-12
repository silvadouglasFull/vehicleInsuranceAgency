import type React from "react";
import { Col } from "react-bootstrap";
import type { PlotProps } from "./types";
export const Plot: React.FC<PlotProps> = ({ plot, numberPlot }: PlotProps) => {
    return plot ? (
        <Col md={3} className="mb-3">
            <strong className="text-secondary">Parcela {numberPlot}:</strong> R$ {plot}
        </Col>
    ) : null;
};