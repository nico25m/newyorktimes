export async function handler() {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
