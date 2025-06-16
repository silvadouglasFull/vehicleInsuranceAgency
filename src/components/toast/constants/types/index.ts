import type { StatusCode } from "@api/statusCode/types";
import type { Variant } from "react-bootstrap/esm/types";
export type Item = {
    statusCode: StatusCode
    variant: Variant
    textColor?: 'string'
}
export type Variants = Array<Item> 