export const classNames = (...names: string[]): string => {
    return names.filter((name) => name).join(' ');
};