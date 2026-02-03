'use client';

import { SuccessProps } from './types';

export default function Success({ onClose }: SuccessProps) {
  return (
    <div className="text-center py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">ثبت موفق!</h3>
      <p className="text-gray-600 mb-8">ممنون از همراهی شما</p>
      <button
        onClick={onClose}
        className="px-10 py-3.5 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition"
      >
        بستن
      </button>
    </div>
  );
}
