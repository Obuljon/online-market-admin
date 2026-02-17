export async function login({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<{ token: string } | Error> {
  // Bu yerda siz backend API'ga login so'rovini yuborishingiz mumkin
  // Masalan, axios yoki fetch yordamida:
  return fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText || "Login failed");
      }
      return response.json();
    })
    .then((data) => {
      // Login muvaffaqiyatli bo'lsa, tokenni localStorage'ga saqlaymiz
      localStorage.setItem("token", data.access_token);
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function adminData(token: string): Promise<{ data: any } | Error> {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/mydata`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}
