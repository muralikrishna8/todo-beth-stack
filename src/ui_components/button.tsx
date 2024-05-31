export const Button = ({ type, children }: ({ type: string, children: HTMLElement | string })) =>
    <button
        class="bg-greenish-primary h-10 px-6 font-semibold rounded-full"
        type={type}>
        {children}
    </button>