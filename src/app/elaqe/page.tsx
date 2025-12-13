'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Card, CardContent } from '@/components/ui/Card';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock existing submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Bizimlə Əlaqə
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Suallarınız və ya təklifləriniz var? Bizimlə əlaqə saxlamaqdan çəkinməyin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <Card className="bg-blue-900 text-white border-0 overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
             <CardContent className="p-8 relative z-10 space-y-8">
                <div>
                   <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                     <MapPin className="h-6 w-6 text-blue-300" />
                     Ünvan
                   </h3>
                   <p className="text-blue-100 leading-relaxed">
                     Sumqayıt şəhəri, 43-cü məhəllə, Bakı küçəsi 1<br />
                     AZ5008, Azərbaycan
                   </p>
                </div>
                <div>
                   <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                     <Phone className="h-6 w-6 text-blue-300" />
                     Telefon
                   </h3>
                   <p className="text-blue-100">
                     (+994 18) 642-12-63
                   </p>
                </div>
                <div>
                   <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                     <Mail className="h-6 w-6 text-blue-300" />
                     Email
                   </h3>
                   <p className="text-blue-100">
                     info@sdu.edu.az
                   </p>
                </div>
             </CardContent>
          </Card>

          {/* Map Placeholder */}
          <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-gray-500">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3031.543596706782!2d49.6639965!3d40.5760924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096dcd0923f6b%3A0x2314647963286b97!2zU3VtcWF5xLF0IETDtnZbZXQgVW5pdmVyc2l0ZXRp!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          {submitted ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mesajınız göndərildi!</h3>
              <p className="text-gray-600 mb-8">
                Müraciətiniz üçün təşəkkür edirik. Ən qısa zamanda sizinlə əlaqə saxlayacağıq.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Yeni mesaj göndər
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ad və Soyad</label>
                <Input id="name" required placeholder="Adınızı daxil edin" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email ünvanı</label>
                <Input id="email" type="email" required placeholder="nümunə@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Mövzu</label>
                <Select id="subject">
                  <option>Ümumi sual</option>
                  <option>Tezislərlə bağlı</option>
                  <option>Texniki dəstək</option>
                  <option>Digər</option>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                  placeholder="Mesajınızı bura yazın..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Göndərilir...' : 'Mesajı göndər'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
