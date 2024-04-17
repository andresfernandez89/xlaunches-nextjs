import { Button } from "@/components/ui/button";
export default function Loading() {
  return (
    <section className="w-auto content-center text-center align-middle max-sm:mt-8">
      <Button variant="secondary" className="w-auto">
        <svg
          className="mr-3 h-5 w-5 animate-spin bg-white"
          viewBox="0 0 24 24"
        />
        Processing...
      </Button>
    </section>
  );
}
