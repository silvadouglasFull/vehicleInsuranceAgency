import type { StatusCode } from "@api/types";
import type { Variant } from "react-bootstrap/esm/types";
export type Item = {
    statusCode: StatusCode
    variant: Variant
    textColor?: 'string'
}
export type Variants = Array<Item> 