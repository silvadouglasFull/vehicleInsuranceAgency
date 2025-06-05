/* eslint-disable @typescript-eslint/no-explicit-any */
import { splitString } from "@utils/transfomerText";
import type { GroupByProps } from "@utils/transformArray/types";
export const groupBy = <T extends Record<string, any>>({ array, key }: GroupByProps<T>): Record<string, T[]> | [] => {
    try {
        const split = splitString({ fullString: key, separator: '.' })
        if (split?.firstPart && split?.secondPart) {
            return array.reduce(
                (acc, item) => {
                    const firstLevel = item[split.firstPart];
                    const groupKey = firstLevel ? firstLevel[split.secondPart] : undefined;
                    return {
                        ...acc,
                        [groupKey]: [
                            ...(acc[groupKey] ?? []),
                            item,
                        ],
                    };
                },
                {} as Record<string, T[]>,
            )
        }
        return array.reduce(
            (acc, item) => ({
                ...acc,
                [item[key]]: [...(acc[item[key]] ?? []), item],
            }),
            {} as Record<string, T[]>,
        )
    } catch (error) {
        console.log(error)
        return []
    }
}