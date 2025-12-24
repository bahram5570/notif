'use client';

import { useState } from 'react';

import landingImage from '@assets/images/womanDay/landingImage.webp';
import womanDaySubscribetion from '@assets/images/womanDaySubscribetion.webp';
import { toEnglishNumbers } from '@utils/numbers';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';
import Spinner from '@components/ui/Spinner';
import useCustomToast from '@hooks/useCustomToast';

import useSubmit from './Hooks/useSubmit';

const GENDER_OPTIONS = [
  { value: 0, label: 'مادرم' },
  { value: 1, label: 'همسرم / پارتنرم' },
];

export default function WomanDayPage() {
  const { submit, isLoading } = useSubmit();

  const { onToast } = useCustomToast();

  const [form, setForm] = useState({
    selfName: '',
    partnerName: '',
    phone: '',
    type: -1,
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  const updateField = (key: string, value: any) => {
    const finalValue = key === 'phone' ? toEnglishNumbers(value) : value;

    if (key === 'phone') {
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(finalValue),
      }));
    }

    setForm((prev) => ({
      ...prev,
      [key]: finalValue,
    }));
  };

  const validatePhone = (value: string) => {
    if (!/^\d+$/.test(value)) return 'شماره تلفن نامعتبر است';
    if (!value.startsWith('09')) return 'شماره تلفن باید با 09 شروع شود';
    if (value.length !== 11) return 'شماره موبایل باید 11 رقم باشد';
    return '';
  };

  const handleSubmit = () => {
    const phoneError = validatePhone(form.phone);

    if (phoneError) {
      setErrors((prev) => ({ ...prev, phone: phoneError }));
      onToast({ type: 'error', message: phoneError });
      return;
    }
    submit(form);
  };

  const isFormInvalid =
    !form.selfName.trim() || !form.partnerName.trim() || !form.phone || form.type == -1 || !errors.phone ? true : false;

  return (
    <div className="w-full max-w-[500px]">
      <CustomImage src={landingImage} alt="landingImage" />

      <div className="px-4 pb-10">
        <div className="text-center">
          <CustomTypography fontSize="Headline_Medium" tagType="h3">
            روز زن مبارک
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" tagType="p" className="mt-2">
            به بهانه روز زن و مادر چی بهتر از اینکه هدیه برای زن مهم زندگیت <strong>مراقبت</strong> بخری و بهش یادآوری
            کنی <strong>که چقدر مهمه</strong>
          </CustomTypography>
        </div>

        <CustomImage src={womanDaySubscribetion} alt="womanDaySubscribetion" className="mt-6" />

        <div className="mt-6">
          <CustomTypography fontSize="Body_Large" tagType="p" className="text-right">
            اول بهمون بگو این هدیه رو برای چه کسی می‌خری؟
          </CustomTypography>

          <div className="flex gap-x-4 mt-4">
            {GENDER_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={opt.value}
                  className="h-4 w-4 accent-[#F24F7A]"
                  checked={form.type === opt.value}
                  onChange={() => updateField('type', opt.value)}
                />
                <CustomTypography fontSize="Body_Large" tagType="span">
                  {opt.label}
                </CustomTypography>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <CustomTypography fontSize="Body_Medium" tagType="span">
              برای اینکه بتونیم هدیه رو به دست عزیزترینت برسونیم، لازمه اطلاعات زیر رو داشته باشیم:
            </CustomTypography>

            <div className="space-y-4 mt-4">
              <CustomInput
                value={form.selfName}
                placeholder="اسم خودت"
                onValue={(val) => updateField('selfName', val)}
                className="border px-4 py-3 rounded-xl focus:!border-impo_Pink_500 border-impo_Neutral_Surface"
              />

              <div>
                <CustomInput
                  value={form.phone}
                  placeholder="شماره تلفن همراهت"
                  onValue={(val) => {
                    updateField('phone', val);
                    setErrors((prev) => ({
                      ...prev,
                      phone: validatePhone(val),
                    }));
                  }}
                  className="border px-4 py-3 rounded-xl focus:!border-impo_Pink_500 border-impo_Neutral_Surface"
                  maxLength={11}
                />
              </div>

              <CustomInput
                value={form.partnerName}
                placeholder="اسم کسی که می‌خوای بهش هدیه بدی"
                onValue={(val) => updateField('partnerName', val)}
                className="border px-4 py-3 rounded-xl focus:!border-impo_Pink_500 border-impo_Neutral_Surface"
              />
            </div>

            <CustomButton
              isDisable={isFormInvalid}
              varient="fill"
              onClick={handleSubmit}
              className="w-full !mt-10 !rounded-xl"
              fontSize="Lable_Large"
            >
              {isLoading ? <Spinner size={20} className="!border-impo_White" /> : 'خرید هدیه روز زن و مادر'}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
