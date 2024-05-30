import { Button } from "../ui_components/button"

export const TodoForm = () =>
    <div>
        <form
            class="space-y-3 my-4"
            hx-post="/todos"
            hx-swap="beforebegin"
            hx-target-400="#error"
            hx-ext="response-targets"
            _="on submit target.reset()"
        >
            <textarea name="content" class="block rounded bg-[#eaf1f1] text-zinc-800 px-3 py-1.5" placeholder="Add todo here"/>
            <Button type="submit">✍🏼</Button>
        </form>
        <div class="text-orange-600" role="alert">
            <div id="error"></div>
        </div>
    </div>
