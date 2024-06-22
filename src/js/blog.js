import '../scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useHeaderScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { useActivitySlider } from './components/blog/activity-slider.js';
import { useFilter } from './components/blog/filter.js';
import { useActivityHintHide } from './components/blog/activity-hint-hide.js';

useTheme();
useHeaderScroll();
useBurger();
useFooterAccordion();
useActivitySlider();
useFilter();
useActivityHintHide();
