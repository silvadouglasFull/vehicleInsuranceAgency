import type { Variants } from "@components/toast/constants/types";
//  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'oxford'

export const variants: Variants = [
    {
        statusCode: 199,
        variant: 'info'
    },
    {
        statusCode: 200,
        variant: 'success'
    },
    {
        statusCode: 201,
        variant: 'success'
    },
    {
        statusCode: 403,
        variant: 'warning'
    },
    {
        statusCode: 405,
        variant: 'warning'
    }
    ,
    {
        statusCode: 420,
        variant: 'warning'
    },
    {
        statusCode: 500,
        variant: 'danger'
    },
    {
        statusCode: 504,
        variant: 'danger'
    }
]; 