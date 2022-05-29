export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const API_KEY = process.env.SENDINBLUE_API_KEY;
    const response = await fetch(`https://api.sendinblue.com/v3/contacts`, {
      body: JSON.stringify({ email }),
      headers: {
        "api-key": `${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const responseJson = await response.json();

    console.log(responseJson);

    if (response.status >= 400) {
      console.log(responseJson);
      return res.status(400).json({
        error: responseJson?.message,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
