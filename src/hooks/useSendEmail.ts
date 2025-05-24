import type { Email} from '@/utils/emailType';


export async function useSendEmail(url: string, data: Omit<Email, "to">): Promise<Response> {

  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",       
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("There was a problem sending the data:", error);
    throw error;
  }
}

