import { type Launch } from "@/types/LaunchApi";
const getApiUrl = async (path: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}${path}`);
  return response.json();
};

export async function getAllLaunches(): Promise<Launch[]> {
  return await getApiUrl("launches");
}
export async function getLaunchById(id: number): Promise<Launch> {
  return await getApiUrl(`launches/${id}`);
}
