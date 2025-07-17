export default function CurrentlyBusy() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "#1D1B19" }}
    >
      <h1 className="mb-4 text-5xl font-extrabold text-white">
        Currently Busy
      </h1>
      <p className="mb-6 text-lg text-gray-300">
        We&apos;re working on something awesome. Please check back soon.
      </p>
      <a
        href="/"
        className="mt-2 inline-block rounded bg-white px-6 py-2 font-medium text-black transition hover:bg-gray-200"
      >
        Go Home
      </a>
      <div className="mt-8 text-sm text-gray-500">— Qbexel Team</div>
    </div>
  );
}
