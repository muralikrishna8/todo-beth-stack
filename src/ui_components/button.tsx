import type { Children } from "typed-html";

export const Button = ({ type, children }: ({ type: string, children: Children })) =>
    <button
        class="bg-indigo-500 px-5 py-1 rounded"
        type={type}>
        {children}
    </button>