const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ||
  "http://localhost:5000/api/contact";

export async function submitContactForm(formData) {
  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  let responseData;

  try {
    responseData = await response.json();
  } catch {
    throw new Error(
      "The server returned an unexpected response. Please try again.",
    );
  }

  if (!response.ok) {
    throw new Error(
      responseData.message ||
        "Unable to send your message. Please try again.",
    );
  }

  return responseData;
}