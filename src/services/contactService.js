export async function submitContactForm(formData) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Unable to submit your message.");
    }

    return {
      success: true,
      mode: "remote",
    };
  }

  if (import.meta.env.DEV) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    return {
      success: true,
      mode: "development",
    };
  }

  throw new Error(
    "The contact form is not connected yet. Please contact Nexovora through WhatsApp or email.",
  );
}