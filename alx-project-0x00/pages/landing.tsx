import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-semibold">Landing Page</h1>
      <Card />
      <div className="flex gap-3 mt-5">
        <Button
        title="Explore"
        className="bg-blue-500 text-white " />
        <Button title="Contact Us" className="bg-gray-300 text-black" />
      </div>
      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
        Get Started
      </button>
    </main>
  );
}

export default Landing;