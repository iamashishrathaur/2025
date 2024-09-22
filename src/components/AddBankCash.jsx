import { useState } from "react";

const InputField = ({ label, prefix, value, onChange, placeholder = "Enter value...", disabled = false }) => (
  <div className="mb-[4vw]">
    <div className="pb-[1.066667vw] text-[4vw] leading-[5.333333vw]">
      <span>{label}</span>
    </div>
    <div className={`border border-[#d9d9d9] rounded-[2.133333vw] h-[12.8vw] flex items-center w-full p-[2.666667vw_4.266667vw] overflow-hidden text-[#323233] text-[3.733333vw] ${disabled ? 'bg-gray-100' : 'bg-white'}`}>
      {prefix && <span className="text-[3.733333vw] text-[#4ca335] mr-[1.333333vw]">{prefix}</span>}
      <input
        type={label === 'Mobile number' || label === 'Bank Account' ? 'tel' : 'text'}
        inputMode={label === 'Mobile number' || label === 'Bank Account' ? 'numeric' : 'text'}
        className="block w-full bg-transparent outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
      />
    </div>
  </div>
);

const AddBankCash = () => {
  const [holderName, setHolderName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  // Basic validation
  const handleSubmit = () => {
    if (!holderName || !bankAccount || !ifscCode) {
      alert("Please fill out all fields.");
      return;
    }
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
      alert("Invalid IFSC Code format. It should be 11 characters long with the 5th character as '0'.");
      return;
    }
    if (bankAccount.length < 9 || bankAccount.length > 18) {
      alert("Bank account number should be between 9 to 18 digits.");
      return;
    }

    console.log("Form submitted:", { holderName, bankAccount, ifscCode });
    alert("Form submitted successfully!");
  };

  return (
    <>
        <div className="p-[4vw_2.666667vw_2.666667vw] rounded-[2.666667vw] bg-white mb-[2.666667vw]">
        <InputField label={'Mobile number'} value={7905321205} disabled />
        <InputField
            label={'Holder Name'}
            placeholder={'Enter holder name...'}
            value={holderName}
            onChange={(e) => setHolderName(e.target.value)}
        />
        <InputField
            label={'Bank Account'}
            placeholder={'Enter account number...'}
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
        />
        <InputField
            label={'IFSC Code'}
            placeholder={'Enter IFSC code...'}
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
        />
        <p className="text-[3.2vw] text-[#e25c5c] mb-[4.266667vw]">IFSC is 11 digits, the 5th digit is the number 0</p>
        </div>
      <button
        className="mt-[6.666667vw] p-[0_4.266667vw] rounded-[2.133333vw] h-[12.8vw] text-[4.266667vw] text-white bg-[#4CA335] w-full outline-none active:bg-[#459330] hover:bg-[#3e8c2a]"
        type="button"
        onClick={handleSubmit}
        aria-label="Confirm"
      >
        <div>Confirm</div>
      </button>
    </>
  );
}

export default AddBankCash;
