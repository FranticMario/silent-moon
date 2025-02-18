import { NavLink, useParams } from 'react-router-dom';
import HomeInactive from '/svg/home_inactive.svg';
import HomeActive from '/svg/home_active.svg';
import YogaActive from '/svg/yoga_active.svg';
import YogaInactive from '/svg/yoga_inactive.svg';
import MeditateActive from '/svg/meditate_active.svg';
import MeditateInactive from '/svg/meditate_inactive.svg';
import MusicActive from '/svg/music_active.svg';
import MusicInactive from '/svg/music_inactive.svg';
import ProfileActive from '/svg/profile_active.svg';
import ProfileInactive from '/svg/profile_inactive.svg';

export const Footer = () => {
  const { type } = useParams();
  return (
    <footer className="pt-20">
      <div
        className="flex justify-evenly fixed bottom-0 z-1 white-bg max-w-[414px] w-full
    p-2.5">
        <NavLink to="/activity/yoga">
          <img src={type === 'yoga' ? YogaActive : YogaInactive} alt="Yoga" className="w-12 h-12" />
        </NavLink>

        <NavLink to="/activity/meditation">
          <img src={type === 'meditation' ? MeditateActive : MeditateInactive} alt="Meditation" className="w-14 h-12" />
        </NavLink>

        <NavLink to="/home">
          {({ isActive }) => <img src={isActive ? HomeActive : HomeInactive} alt="" className="w-12 h-12" />}
        </NavLink>

        <NavLink to="/music/b18f83fa-c79f-4008-884f-6ae80800e79e">
          {({ isActive }) => <img src={isActive ? MusicActive : MusicInactive} alt="" className="w-12 h-12" />}
        </NavLink>

        <NavLink to="/profile">
          {({ isActive }) => <img src={isActive ? ProfileActive : ProfileInactive} alt="" className="w-12 h-12" />}
        </NavLink>
      </div>
    </footer>
  );
};
