import type React from "react";
import type { PlotProps } from "./types";
export const Plot: React.FC<PlotProps> = ({ plot, numberPlot }: PlotProps) => {
    return plot ? (
        <p><strong>Parcela {numberPlot}:</strong> R$ {plot}</p>
    ) : null;
};