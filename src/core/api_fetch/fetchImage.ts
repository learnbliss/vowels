const API_TOKEN = "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";

export const fetchImageFromWord = async (word: string) => {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                body: JSON.stringify({inputs: word}),
            }
        );
        const blob = await response.blob();
        return URL.createObjectURL(blob)
};
