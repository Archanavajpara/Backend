import { validateForm } from "./actions";

export default function Page() {
    return (
        <div>
        <h1>Form Validation</h1>
        <form action={validateForm}>
            <input
            type="text"
            name="name"
            placeholder="Enter name"
            />
            <br /><br />
            <input
            type="email"
            name="email"
            placeholder="Enter email"
            />
            <br /><br />
            <input
            type="number"
            name="age"
            placeholder="Enter age"
            />
            <br /><br />
            <button type="submit">
            Submit
            </button>
        </form>
        </div>
    );
}