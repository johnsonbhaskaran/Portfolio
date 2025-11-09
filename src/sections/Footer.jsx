import LinkedInDark from "./../assets/social/LinkedIn-dark.png";
import LinkedInLight from "./../assets/social/LinkedIn-light.png";
import GitHubDark from "./../assets/social/GitHub-dark.png";
import GitHubLight from "./../assets/social/GitHub-light.png";
import BehanceDark from "./../assets/social/Behance-dark.png";
import BehanceLight from "./../assets/social/Behance-light.png";
import DribbbleDark from "./../assets/social/Dribbble-dark.png";
import DribbbleLight from "./../assets/social/Dribbble-light.png";
import { useTheme } from "../themeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className='flex justify-center items-center bg-white/20 h-32'>
      <div className='w-5xl'>
        <div className='flex justify-between items-center'>
          <p>copyright © 2025. All rights reserved.</p>
          <div className='flex gap-8'>
            <a>
              <img src={`${theme === "light" ? LinkedInDark : LinkedInLight}`} alt='' />
            </a>
            <a>
              <img src={`${theme === "light" ? GitHubDark : GitHubLight}`} alt='' />
            </a>
            <a>
              <img src={`${theme === "light" ? BehanceDark : BehanceLight}`} alt='' />
            </a>
            <a>
              <img src={`${theme === "light" ? DribbbleDark : DribbbleLight}`} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
