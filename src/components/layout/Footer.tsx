import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold leading-8 mb-4">Sumqayıt Dövlət Universiteti</h3>
            <p className="text-sm leading-6 text-gray-300">
              Konfrans Materialları
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Əlaqə</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Sumqayıt ş., Bakı küçəsi 1, 43-cü məhəllə
                </a>
              </li>
              <li>
                <a href="mailto:info@sdu.edu.az" className="text-sm leading-6 text-gray-300 hover:text-white">
                  info@sdu.edu.az
                </a>
              </li>
              <li>
                <a href="tel:+994186421263" className="text-sm leading-6 text-gray-300 hover:text-white">
                  (+994 18) 642-12-63
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Keçidlər</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://sdu.edu.az" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">
                  SDU Rəsmi sayt
                </a>
              </li>
              <li>
                <Link href="/konfrans-ve-tezisler" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Konfranslar
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Sumqayıt Dövlət Universiteti. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}
