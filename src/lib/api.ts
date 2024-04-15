import { type Launch } from "@/types/Launch";
const getApiUrl = async (path: string) => {
  const response = await fetch(`https://api.spacexdata.com/v5/${path}`);
  return response.json();
};

export async function getAllLaunches(): Promise<Launch[]> {
  return await getApiUrl("launches");
}
export async function getLaunchById(id: number): Promise<Launch> {
  return await getApiUrl(`launches/${id}`);
}
