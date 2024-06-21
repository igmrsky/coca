import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export const useModal = () => {
    Fancybox.bind('[data-fancybox]', {});
};
