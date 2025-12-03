export async function handler() {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "NYT API error" }),
      };
    } 
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
