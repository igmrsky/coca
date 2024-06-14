import '../scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useHeaderScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useHeaderScroll();
useBurger();
useFooterAccordion();
usePriceSwitcher();
