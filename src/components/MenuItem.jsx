import orderIcon from '../assets/order_icon.png';
import teamIcon from '../assets/team_icon.png';
import vipIcon from '../assets/vip_icon.png';
import recordIcon from '../assets/record_icon.png';
import bankIcon from '../assets/bank_icon.png';
import commissionIcon from '../assets/commission_icon.png';
import helpIcon from '../assets/help_icon.png';
import myIcon from '../assets/my_icon.png';
import passwordIcon from '../assets/password_icon.png';
import languageIcon from '../assets/language_icon.png';
import downloadIcon from '../assets/download_icon.png';
import nextArrow from '../assets/next_arrow.png'

const MenuItem = () => {
  const items = [
    { name: 'My Order', icon: orderIcon },
    { name: 'Team', icon: teamIcon },
    { name: 'Vip Level', icon: vipIcon },
    { name: 'Fund Record', icon: recordIcon },
    { name: 'Bank Card', icon: bankIcon },
    { name: 'Commission', icon: commissionIcon },
    { name: 'Help Center', icon: helpIcon },
    { name: 'My Info', icon: myIcon },
    { name: 'Reset Password', icon: passwordIcon },
    { name: 'Language', icon: languageIcon },
    { name: 'Download App', icon: downloadIcon },
  ];

  return (
    items.map((item, index) => (
      <div key={index} className="flex items-center justify-between border-b border-[#ECECEC] h-[12.266667vw] last:border-0">
        <div className="flex items-center font-normal">
          <div className="size-[5.333333vw] mr-[2.666667vw]">
            <img
              src={item.icon}
              alt={`${item.name} icon`}
            />
          </div>
          <div className="name">{item.name}</div>
        </div>
        <div className="flex items-center">
          <div className="text-[#949494] text-[3.2vw]">
            <p className="text-[#4ca335]">₹ 0</p>
          </div>
          <div className="w-[1.6vw] ml-[1.866667vw]">
            <img
              src={nextArrow} // or any other icon you want to display
              alt="more icon"
            />
          </div>
        </div>
      </div>
    ))
  );
};

export default MenuItem;
