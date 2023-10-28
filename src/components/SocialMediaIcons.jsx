import {FaLinkedin,FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/faizan-rahil-86200a1a1/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/rahilfaizan"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/profile.php?id=100008296458647"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/rahil_faizan/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram/>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;