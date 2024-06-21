import '../scss/blog-one.scss';

// components
import { useTheme } from './components/theme.js';
import { useHeaderScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footer-accordion.js';

useTheme();
useHeaderScroll();
useBurger();
useFooterAccordion();
