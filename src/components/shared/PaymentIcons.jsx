import { FaCreditCard, FaBarcode } from 'react-icons/fa';
import { SiPix } from 'react-icons/si';
import { cn } from '../../utils/classNames';

export const PaymentIcons = ({ className = '' }) => {
  return (
    <div className={cn('space-y-3', className)}>
      <h5 className="text-sm font-medium text-gray-600 text-center">
        Formas de Pagamento Aceitas
      </h5>
      
      <div className="flex items-center justify-center gap-4">
        {/* Cartão */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center shadow-sm">
            <FaCreditCard className="text-white text-sm" />
          </div>
          <span className="text-xs text-gray-500">Cartão</span>
        </div>
        
        {/* PIX */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded flex items-center justify-center shadow-sm">
            <SiPix className="text-white text-sm" />
          </div>
          <span className="text-xs text-gray-500">PIX</span>
        </div>
        
        {/* Boleto */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center shadow-sm">
            <FaBarcode className="text-white text-sm" />
          </div>
          <span className="text-xs text-gray-500">Boleto</span>
        </div>
      </div>
    </div>
  );
};
