export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200 text-gray-600 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">ZORX AGENCY</h4>
                        <p className="mb-2">Fueling Brands Growth</p>
                        <p>Dubai, UAE</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
                        <p className="mb-2">Office No 147, Emarat Atrium</p>
                        <p className="mb-2">Sheikh Zayed Road - E11</p>
                        <p className="mb-2">Dubai, UAE</p>
                        <p className="mb-2 font-bold text-primary">
                            <a href="tel:+971542763828">054 276 3828</a>
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Trust</h4>
                        <p className="mb-2">Registered Dubai Business</p>
                        <p className="mb-2">200+ Websites Delivered</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                        <p className="mb-2 hover:text-primary cursor-pointer">Privacy Policy</p>
                        <p className="mb-2 hover:text-primary cursor-pointer">Terms & Conditions</p>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-gray-200">
                    &copy; 2026 Zorx Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
