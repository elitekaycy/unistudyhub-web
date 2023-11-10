import { BASE_URL, TOKEN } from "./constant";

export const useInitials = (name) => {
  if (!name) return "An";

  if (name.length === 1) return name;

  return `${name[0].toUpperCase()}${name[1].toLowerCase()}`;
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN) || null;
};

export const removeToken = () => [localStorage.removeItem(TOKEN)];

export const BaseFetch = async (
  url,
  options = {
    method: "GET",
  }
) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error(response?.statusText);

    return await response.json();
  } catch (err) {
    throw Error(err);
  }
};

export const getMe = async () => {
  try {
    const token = getToken();
    const getUser = await BaseFetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return getUser;
  } catch (err) {
    return null;
  }
};


export const getCourses = async() => {
  try {
    const token = getToken();
    const getUser = await BaseFetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return getUser;
  } catch (err) {
    return null;
  }
}

export function downloadFile(url, fileName) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error downloading PDF:', error));
}



export const downloadPdf = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    // Create a link element
    const link = document.createElement('a');

    // Create a Blob URL for the blob
    const blobUrl = URL.createObjectURL(blob);

    // Set the link's href attribute to the Blob URL
    link.href = blobUrl;

    // Set the download attribute with the desired filename
    link.download = filename;

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};