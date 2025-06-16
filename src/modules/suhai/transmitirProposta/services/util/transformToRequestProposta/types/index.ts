import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import type { State } from "@pages/proposal/layouts/hooks/useGetParamsScreen/types";

export type TransformToRequestProposta = {
    stateOfScreenParams: State
    stateOfContext: States
}