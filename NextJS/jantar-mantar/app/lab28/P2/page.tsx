export default function P2Page() {
    // Server Action
    async function printFormData(formData: FormData) {
        "use server";

        const name = formData.get("name");
        const email = formData.get("email");

        console.log("Form Data:");
        console.log("Name:", name);
        console.log("Email:", email);
    }

    return (
        <div className="container">
            <h1>P2 - Server Action</h1>

            <p>
                Enter the details and submit the form. The form data will be printed
                in the server terminal.
            </p>

            <form action={printFormData} className="form">
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