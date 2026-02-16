import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              NovaTech
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Building clean, modern, and high performance digital products.
              No drama, just shipping code.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm">

              <div className="flex gap-3">
                <Mail size={16} />
                <span>hello@novatech.dev</span>
              </div>

              <div className="flex gap-3">
                <Phone size={16} />
                <span>+62 812-0000-0000</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>

            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} NovaTech. All rights reserved.
          </p>

          <p>
            Built with React + Tailwind. Coffee not included.
          </p>
        </div>

      </div>
    </footer>
  );
}
