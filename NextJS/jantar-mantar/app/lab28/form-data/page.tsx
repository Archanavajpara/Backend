export default function Page() {

    async function submitForm(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    console.log("Name:", name);
    console.log("Email:", email);
    }

    return (
    <div>
        <h1>Form Data</h1>
        <form action={submitForm}>
            <input
                type="text" name="name" placeholder="Enter name"
            />
            <br /><br />
            <input
                type="email" name="email" placeholder="Enter email"
            />
            <br /><br />
            <button type="submit">
                Submit
            </button>
        </form>
    </div>
    );
}