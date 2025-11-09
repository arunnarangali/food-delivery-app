import { Link } from 'react-router-dom';

const FOOTER_SECTIONS = [
  {
    id: 'about',
    title: 'About FoodExpress',
    content: {
      type: 'text',
      text: 'Your favorite food delivered fast and fresh to your doorstep.',
    },
  },
  {
    id: 'links',
    title: 'Quick Links',
    content: {
      type: 'links',
      items: [
        { label: 'Home', to: '/' },
        { label: 'Menu', to: '/menu' },
        { label: 'Cart', to: '/cart' },
      ],
    },
  },
  {
    id: 'social',
    title: 'Social Media',
    content: {
      type: 'social',
      items: [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
      ],
    },
  },
];

const CURRENT_YEAR = new Date().getFullYear();
const COPYRIGHT_TEXT = `© ${CURRENT_YEAR} FoodExpress. All rights reserved.`;

const FooterSection = ({ section }) => {
  const { title, content } = section;

  const renderContent = () => {
    switch (content.type) {
      case 'text':
        return (
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {content.text}
          </p>
        );

      case 'links':
        return (
          <ul className="space-y-2">
            {content.items.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        );

      case 'social':
        return (
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {content.items.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-gray-400 hover:text-white transition"
              >
                {social.label}
              </a>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-[calc(33.333%-1.334rem)]">
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{title}</h3>
      {renderContent()}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.id} section={section} />
          ))}
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            {COPYRIGHT_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
