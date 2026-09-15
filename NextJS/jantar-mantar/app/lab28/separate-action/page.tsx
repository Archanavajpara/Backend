import { submitForm } from "./action";

export default function Page() {

    return (
        <div>
        <h1>Separate Server Action</h1>

        <form action={submitForm}>
            <input
            name="name"
            placeholder="Enter name"
            />
            <br /><br />
            <input
            name="email"
            placeholder="Enter email"
            />
            <br /><br />
            <button type="submit">
            Submit
            </button>
        </form>
        </div>
    );
}

// How it work's:
// 1. The `submitForm` function is defined in a separate file called `action.ts`. This function is marked with `"use server"` to indicate that it should be executed on the server side.
// 2. The `Page` component renders a form with two input fields for name and email, and a submit button.
// 3. When the form is submitted, the `submitForm` function is called with the form data as an argument.
// 4. Inside the `submitForm` function, the values of the name and email fields are extracted from the `FormData` object and logged to the console.