export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-gray-400">
          criado por{' '}
          <a 
            href="https://insidefreecoding.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            insidefreecoding.com.br
          </a>
        </p>
      </div>
    </footer>
  );
};
