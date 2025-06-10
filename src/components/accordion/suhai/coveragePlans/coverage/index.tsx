import type React from "react";
import type { CoberturaItem } from "../types";

export const Coverage: React.FC<CoberturaItem> = ({ id, Parcelamento, nome, premioLiquido }: CoberturaItem) => {
    const { Parcela } = Parcelamento
    return (
        <div className="mb-4" key={id}>
            <h6 className="fw-bold text-primary">{nome}</h6>
            <p><strong>Prêmio Líquido:</strong> R$ {premioLiquido}</p>
            <ul className="ps-3">
                {Parcela.length ? Parcela.map((item, i) => (
                    <li key={i}>
                        <strong>{item.quantidade}x</strong> de R$ {item._value_1.toFixed(2)} | Total: R$ {item.valorTotal.toFixed(2)} | IOF: R$ {item.valorIOF.toFixed(2)} | Juros: R$ {item.valorJuros.toFixed(2)}
                    </li>
                )) : null}
            </ul>
        </div>
    )
}