export const Button = (params: {
  type: string;
  children: HTMLElement | string;
  class: string;
}) => (
  <button
    class={`btn btn-primary rounded-full h-10 px-10 ${params.class}`}
    type={params.type}
  >
    {params.children}
  </button>
);
