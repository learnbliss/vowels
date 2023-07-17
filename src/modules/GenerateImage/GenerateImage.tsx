/*
Вариант с openai сломался, больше не генерирует картинки, теперь только платно
 */
import React, { useState } from 'react';
import ky from 'ky';

const apiKey = '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'

const GenerateImage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function handleGenerateImage() {
    const response = await ky.post('https://api.openai.com/v1/images/generations', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      json: {
        model: 'image-alpha-001',
        prompt: prompt,
        num_images: 1,
        size: '512x512',
      }
    });

    const imageData = new Uint8Array(await response.arrayBuffer());
    const imageBlob = new Blob([imageData], { type: 'image/png' });
    const url = URL.createObjectURL(imageBlob);
    setImageUrl(url);
  }

  return (
    <div>
      <label htmlFor="prompt-input">Enter the prompt:</label>
      <input id="prompt-input" type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={handleGenerateImage}>Generate Image</button>
      {imageUrl !== '' && <img src={imageUrl} alt="Generated Image" />}
    </div>
  );
}

export default GenerateImage;
