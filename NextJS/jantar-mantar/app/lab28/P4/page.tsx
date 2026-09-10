import { redirect } from "next/navigation";

export default function P4Page({
    searchParams,
}: {
    searchParams: { message?: string };
}) {
    async function validateForm(formData: FormData) {
        "use server";

        const name = formData.get("name")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const age = Number(formData.get("age"));

        // Server-side validation
        if (!name) {
            redirect("/Lab28/P4?message=Name is required");
        }

        if (!email || !email.includes("@")) {
            redirect("/Lab28/P4?message=Please enter a valid email");
        }

        if (!age || age < 18) {
            redirect("/Lab28/P4?message=Age must be 18 or above");
        }

        console.log("Validation successful");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Age:", age);

        redirect("/Lab28/P4?message=Form submitted successfully");
    }

    return (
        <div className="container">
            <h1>P4 - Server Action with Validation</h1>

            {searchParams.message && (
                <div className="message">
                    {searchParams.message}
                </div>
            )}

            <form action={validateForm} className="form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />

                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                />

                <button type="submit">Validate & Submit</button>
            </form>
        </div>
    );
}