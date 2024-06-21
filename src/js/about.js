import '../scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useHeaderScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { useModal } from './components/about/modal.js';
import { useHeroSlider } from './components/about/hero-slider.js';
import { useHeroHintHide } from './components/about/hero-hint-hide.js';
import { useTeamSlider } from './components/about/team-slider.js';
import { useTeamHintHide } from './components/about/team-hint-hide.js';

useTheme();
useHeaderScroll();
useBurger();
useFooterAccordion();
useModal();
useHeroSlider();
useHeroHintHide();
useTeamSlider();
useTeamHintHide();
