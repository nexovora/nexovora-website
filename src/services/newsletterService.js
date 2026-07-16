export async function subscribeToNewsletter(email) {
  const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Unable to subscribe at the moment.");
    }

    return {
      success: true,
      mode: "remote",
    };
  }

  if (import.meta.env.DEV) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 700);
    });

    return {
      success: true,
      mode: "development",
    };
  }

  throw new Error(
    "Newsletter subscriptions are not connected yet. Please try again later.",
  );
}