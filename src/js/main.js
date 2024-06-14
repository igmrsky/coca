import '../scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useHeaderScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { useHintHide } from './components/home/hint-hide.js';
import { useFooterAccordion } from './components/footer-accordion.js';

useTheme();
useHeaderScroll();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useHintHide();
useFooterAccordion();
