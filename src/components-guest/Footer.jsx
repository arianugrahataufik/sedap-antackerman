import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="w-full bg-hijau py-12 px-6 sm:px-8 lg:px-12 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-4 text-sm text-black/80">
            Restoran cepat saji halal yang enak dan bergizi. Temukan kami di media sosial!
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Beranda</a></li>
            <li><a href="#" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Hubungi Kami</h4>
          <p className="text-sm mb-4">+62 812 3456 7890</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90"
            >
              Instagram
            </a>
            <a
              href="#"
              className="border-2 border-black text-black px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-black/20 pt-6 text-center text-sm text-black/70">
        &copy; {new Date().getFullYear()} Restoran SEDAP. All rights reserved.
      </div>
    </footer>
  );
}
