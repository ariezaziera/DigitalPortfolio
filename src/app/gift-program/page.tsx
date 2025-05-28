import Link from 'next/link';

export default function GiftProgram() {
  return (
    <section id="about" className="py-20 px-10 md:px-12 lg:px-32 xs:px-5 text-white" style={{ backgroundColor: "rgba(14, 13, 14, 1)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 mt-10">GIFT Program</h2>
        <p className="mb-4">A collection of tasks, assignments, and insights from my participation in the GIFT program.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Task 1: Logo Analysis</h2>
            <p className="mt-2">Reviewed and analyzed company logos for brand identity effectiveness.</p>
            <a href="/pdfs/logo-analysis.pdf" target="_blank" className="text-blue-600 underline mt-2 block">View Report</a>
          </div>

          <div className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Task 2: Data Infographic</h2>
            <p className="mt-2">Created an infographic visualizing customer data trends in retail.</p>
            <img src="/images/infographic.png" alt="Infographic" className="mt-2 rounded"/>
          </div>

          {/* add more tasks here */}
        </div>

        <Link href="/" className="text-blue-600 underline mt-8 block">← Back to Home</Link>
      </div>
    </section>
  );
}
