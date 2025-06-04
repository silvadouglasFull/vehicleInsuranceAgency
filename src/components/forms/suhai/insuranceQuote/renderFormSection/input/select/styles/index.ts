/* eslint-disable @typescript-eslint/no-explicit-any */
export const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
        boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(13,110,253,.25)' : 'none',
        '&:hover': {
            borderColor: state.isFocused ? '#86b7fe' : '#86b7fe'
        },
        minHeight: '38px',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? '#0d6efd'
            : state.isFocused
                ? '#e9ecef'
                : 'white',
        color: state.isSelected ? 'white' : '#212529',
        padding: '10px 12px',
        cursor: 'pointer',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#212529',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#6c757d',
    }),
    menu: (provided: any) => ({
        ...provided,
        zIndex: 9999,
    }),
};