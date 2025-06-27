export function RenderConditional({ condition, children }) {
    return condition ? children : null;
}