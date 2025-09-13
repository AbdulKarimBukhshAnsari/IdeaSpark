import SearchForm from "@/components/SearchForm/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const queryParams = (await searchParams).query ;
  return (
    <>
      <section
        className="pink_container "
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 49%, rgba(251, 232, 67, 0.2) 49%, rgba(251, 232, 67, 0.6) 51%, transparent 51%)",
          backgroundSize: "5% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
      >
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Join our community of innovative thinkers and bring your ideas to
          life.
        </p>
        <SearchForm query={queryParams} />
      </section>
    </>
  );
}
