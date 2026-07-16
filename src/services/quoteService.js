const QUOTE_API_URL =
  import.meta.env.VITE_QUOTE_API_URL ||
  "http://localhost:5000/api/quote";

export async function submitQuoteRequest(formData) {
  const response = await fetch(QUOTE_API_URL, {
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
      "The server returned an unexpected response.",
    );
  }

  if (!response.ok) {
    throw new Error(
      responseData.message ||
        "Unable to submit the quotation request.",
    );
  }

  return responseData;
}