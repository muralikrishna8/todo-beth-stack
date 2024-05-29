export const TodoForm = () =>
    <div>
        <form
            class="flex flex-row space-x-3"
            hx-post="/todos"
            hx-swap="beforebegin"
            hx-target-400="#error"
            hx-ext="response-targets"
            _="on submit target.reset()"
        >
            <input type="text" name="content" class="border border-black" />
            <button type="submit">✍🏼</button>
        </form>
        <div class="text-orange-600" role="alert">
            <div id="error"></div>
        </div>
    </div>