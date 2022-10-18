import { useState } from 'react';
import classNames from 'classnames';
import VsfButton from '../VsfButton/VsfButton';
import VsfIconChevronLeft from '../VsfIcons/VsfIconChevronLeft';
import VsfIconChevronRight from '../VsfIcons/VsfIconChevronRight';
import type { VsfSliderProps } from './types';
import { VsfSliderNavigation, VsfSliderScrollbar } from './types';
import { useSlider } from '../../shared/slider/react';
import { VsfButtonVariants } from '../VsfButton';

export default function VsfSlider({
  navigation,
  scrollbar,
  showMobileNavigation,
  scrollSnap,
  draggable,
  className,
  children,
  slotNextArrow,
  slotPrevArrow,
  ...attributes
}: VsfSliderProps) {
  const [hasPrev, setHasPrev] = useState<boolean>(true);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const [containerRef, slider] = useSlider<HTMLDivElement>({
    reduceMotion: typeof window !== 'undefined' && window?.matchMedia('(prefers-reduced-motion: reduce)').matches,
    drag: draggable,
    onScroll: ({ hasPrev: prev, hasNext: next }) => {
      setHasPrev(prev);
      setHasNext(next);
    },
  });
  function onClickPrev() {
    return slider.current?.prev();
  }
  function onClickNext() {
    return slider.current?.next();
  }

  const prevButtonDefault = (
    <VsfButton
      variant={VsfButtonVariants.secondary}
      icon
      rounded
      className={classNames('vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasPrev })}
      onClick={onClickPrev}
      disabled={!hasPrev}
    >
      <VsfIconChevronLeft />
    </VsfButton>
  );
  const nextButtonDefault = (
    <VsfButton
      variant={VsfButtonVariants.secondary}
      icon
      rounded
      className={classNames('vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasNext })}
      onClick={onClickNext}
      disabled={!hasNext}
    >
      <VsfIconChevronRight />
    </VsfButton>
  );
  const prevNavigation =
    typeof slotPrevArrow === 'function' ? slotPrevArrow({ onClick: onClickPrev, hasPrev }) : prevButtonDefault;
  const nextNavigation =
    typeof slotNextArrow === 'function' ? slotNextArrow({ onClick: onClickNext, hasNext }) : nextButtonDefault;

  return (
    <div
      className={classNames(
        'vsf-slider',
        {
          'vsf-slider--floating-nav': navigation === VsfSliderNavigation.floating,
          'vsf-slider--mobile-nav': showMobileNavigation,
          'vsf-slider--snap-scroll': scrollSnap,
        },
        className,
      )}
      {...attributes}
    >
      {navigation && <div className="vsf-slider__nav vsf-slider__nav-prev">{prevNavigation}</div>}

      <div
        ref={containerRef}
        className={classNames([
          'vsf-slider__container',
          {
            'scrollbar-hidden': !scrollbar,
            'vsf-slider__container--scroll': scrollbar === VsfSliderScrollbar.always,
          },
        ])}
      >
        {children}
      </div>

      {navigation && <div className="vsf-slider__nav vsf-slider__nav-next">{nextNavigation}</div>}
    </div>
  );
}
