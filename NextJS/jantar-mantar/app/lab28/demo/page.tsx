export default function Page() {
    async function hello() {
        "use server";
        console.log("Hello from Server Action");
    }

    return (
        <div>
        <h1>Server Action Demo</h1>
        <form action={hello}>
            <button type="submit">
            Click Me
            </button>
        </form>
        </div>
    );
}