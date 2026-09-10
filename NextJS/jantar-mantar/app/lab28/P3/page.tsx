import { saveFormData } from "./action";

export default function P3Page() {
    return (
        <div className="container">
            <h1>P3 - Server Action in Separate File</h1>

            <p>
                The Server Action is stored in <b>action.tsx</b> and imported into
                this page.
            </p>

            <form action={saveFormData} className="form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}