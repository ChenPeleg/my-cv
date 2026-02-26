import React from 'react';

interface ContactInfoProps {
  email: string;
  phone: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ email, phone }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
      <h3 className="mt-0 text-slate-800 text-xl border-b-2 border-slate-100 pb-2.5 mb-5 font-bold">Contact</h3>
      <ul className="list-none p-0">
        <li className="mb-3 text-sm text-slate-600">📧 {email}</li>
        <li className="mb-3 text-sm text-slate-600">📱 {phone}</li>
      </ul>
    </div>
  );
};
