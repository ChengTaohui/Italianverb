interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function getChatResponse(messages: ChatMessage[]) {
  try {
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SILICONFLOW_API_KEY}`
      },
      body: JSON.stringify({
        model: 'Qwen/QwQ-32B-Preview',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful Italian language tutor. Help users practice Italian, especially with verb conjugations. Respond in a mix of Italian and English to help users learn.'
          },
          ...messages
        ],
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw error;
  }
} 