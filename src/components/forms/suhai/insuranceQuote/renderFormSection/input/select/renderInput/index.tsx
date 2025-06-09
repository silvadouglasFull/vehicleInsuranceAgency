import { Spinner } from "@components/spinner"
import type React from "react"
import Select from "react-select"
import { customStyles } from "../styles"
import type { RenderSelectProps } from "../types"

export const RenderSelect: React.FC<RenderSelectProps> = ({
    placeholder,
    isClearable,
    isSearchable,
    onChange,
    options,
    selectedOption,
    isLoading
}: RenderSelectProps) => {
    return (
        <Select
            styles={customStyles}
            value={selectedOption}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            isClearable={isClearable}
            isSearchable={isSearchable}
            noOptionsMessage={() => <span>Nenhum resultado encontrado</span>}
            loadingMessage={() => (
                <Spinner />
            )}
            isLoading={isLoading}
        />
    )
}