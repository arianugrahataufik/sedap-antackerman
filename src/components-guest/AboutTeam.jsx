export default function AboutTeam() {
  return (
    <section className="py-12 px-6 bg-white font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-hijau mb-8">
          Tim Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200" />
              <h3 className="mt-4 text-xl font-bold text-teks">
                Nama Tim {i + 1}
              </h3>
              <p className="text-teks-samping">Posisi</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
