const getApiUrl = async (path: string) => {
  const response = await fetch(`https://api.spacexdata.com/v5/${path}`);
  return response.json();
};

export async function getAllLaunches() {
  return await getApiUrl("launches");
}
export async function getLaunchById(id: number) {
  return await getApiUrl(`launches/${id}`);
}
