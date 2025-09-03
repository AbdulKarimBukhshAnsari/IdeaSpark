import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="pink_container"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
          backgroundSize: "5% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Join our community of innovative thinkers and bring your ideas to
          life.
        </p>
      </section>
    </>
  );
}
