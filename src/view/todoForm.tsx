import { Button } from "../ui_components/button"

export const TodoForm = () =>
    <div>
        <form
            class="flex flex-row space-x-3 my-4"
            hx-post="/todos"
            hx-swap="beforebegin"
            hx-target-400="#error"
            hx-ext="response-targets"
            _="on submit target.reset()"
        >
            <input type="text" name="content" class="rounded text-zinc-800 p-1" />
            <Button type="submit">✍🏼</Button>
        </form>
        <div class="text-orange-600" role="alert">
            <div id="error"></div>
        </div>
    </div>
