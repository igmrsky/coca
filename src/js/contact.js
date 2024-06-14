import '../scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useHeaderScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { useMap } from './components/contact/map.js';
import { usePhone } from './components/contact/phone.js';

useTheme();
useHeaderScroll();
useBurger();
useFooterAccordion();
useMap();
usePhone();
