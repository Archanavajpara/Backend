"use server";

export async function validateForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const age = Number(formData.get("age"));

    if (name === "") {
        console.log("Name is required");
        return;
    }

    if (email === "") {
        console.log("Email is required");
        return;
    }

    if (age < 18) {
        console.log("Age must be 18 or above");
        return;
    }

    console.log("Form is valid");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
}