import Footer from "./footer";

const BaseHtml = () =>
    <html lang="en">
        <head>
            <title>📜 Todo app</title>
            <script src="https://unpkg.com/htmx.org@1.9.12"></script>
            <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/response-targets.js"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
            <link rel="stylesheet" href="public/styles.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"></link>
        </head>

        <body class="bg-greenish-tertiary">
            <main
                class="flex w-full h-screen justify-center items-center text-zinc-800"
                hx-get="/todos"
                hx-trigger="load"
            ></main>
            <Footer />
        </body>
    </html>

export default BaseHtml;