
import type { IWhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/IWhatIsDataType";
import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";
export class Handler implements IWhatIsDataType {
    private next: Handler | null
    constructor(next: Handler | null) {
        this.next = next ?? null;
    }
    handle(data: []): TypeData | null {
        if (this.next) {
            return this.next.handle(data);
        }
        return null;
    }
}