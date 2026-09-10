"use server";

export async function saveFormData(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  console.log("P3 Form Data:");
  console.log("Name:", name);
  console.log("Email:", email);
}