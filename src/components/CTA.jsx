import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <div className="cta">
      <p className="cta-text">
        Have you a project in mind?
        <br />
        Let&apos;s build it together!
      </p>

      <Link to={"/contacts"} className="btn flex items-center gap-2">
        Contact me
        <span className="material-symbols-outlined">call</span>
      </Link>
      <span className="flex items-center gap-4">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.name}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialLink.iconUrl}
              alt={socialLink.name}
              className="w-6 h-6 hover:scale-125 transition object-contain"
            />
          </a>
        ))}
      </span>
    </div>
  );
};

export default CTA;
