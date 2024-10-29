import { Container } from '@/components/container';
import { generalSettings } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 py-5">
          <div className="flex gap-2 font-normal text-2sm">
            <span className="text-gray-500">{currentYear} &copy;</span>
            <a
              href="https://keenthemes.com"
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              Keenthemes Inc.
            </a>
          </div>
          <nav className="flex gap-2 font-normal text-2sm text-gray-600">
            <a href={generalSettings.aboutLink} target="_blank" className="hover:text-primary">
              About
            </a>
            <a href={generalSettings.devsLink} target="_blank" className="hover:text-primary">
              Support
            </a>
            <a href={generalSettings.faqLink} target="_blank" className="hover:text-primary">
              FAQ
            </a>
            <a href={generalSettings.purchaseLink} target="_blank" className="hover:text-primary">
              Purchase
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
