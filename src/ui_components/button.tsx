export const Button = (params: ({ type: string, children: HTMLElement | string, 'class': string })) =>
    <button
        class={`bg-greenish-primary h-10 px-10 font-semibold rounded-full ${params.class}`}
        type={params.type}>
        {params.children}
    </button>