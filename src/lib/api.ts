const getApiUrl = async (path: string) => {
  const response = await fetch(`https://api.spacexdata.com/v5/${path}`);
  return response.json();
};

export async function getAllLauches() {
  return await getApiUrl("launches");
}
