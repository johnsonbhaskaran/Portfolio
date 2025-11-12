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
    <div className='flex justify-center items-center pb-16 xl:h-32'>
      <div className='w-xs md:w-2xl xl:w-5xl'>
        <div className='flex xl:flex-row flex-col-reverse justify-between items-center gap-8 xl:gap-0'>
          <p>copyright © 2025. All rights reserved.</p>
          <div className='flex gap-8'>
            <a href='https://www.linkedin.com/in/johnsonbhaskaran/'>
              <img src={`${theme === "light" ? LinkedInDark : LinkedInLight}`} alt='' />
            </a>
            <a href='https://github.com/johnsonbhaskaran'>
              <img src={`${theme === "light" ? GitHubDark : GitHubLight}`} alt='' />
            </a>
            <a href='https://www.behance.net/johnsonb'>
              <img src={`${theme === "light" ? BehanceDark : BehanceLight}`} alt='' />
            </a>
            <a href='https://dribbble.com/johnsonbhaskaran'>
              <img src={`${theme === "light" ? DribbbleDark : DribbbleLight}`} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
