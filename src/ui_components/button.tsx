import type { Children } from "typed-html";

export const Button = ({ type, children }: ({ type: string, children: Children })) =>
    <button
        class="bg-[#719191] h-10 px-6 font-semibold rounded-md"
        type={type}>
        {children}
    </button>