import "dotenv/config";

// messages: array of { role: "user" | "assistant", content: string }
const getOpenAIAPIResponse = async (messages) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();

        if (!response.ok || !data.choices?.length) {
            console.log("OpenAI API error:", data.error?.message || response.status);
            return null;
        }

        return data.choices[0].message.content; // reply
    } catch (err) {
        console.log(err);
        return null;
    }
};

export default getOpenAIAPIResponse;
