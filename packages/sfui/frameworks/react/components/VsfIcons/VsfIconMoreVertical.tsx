import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconMoreVertical({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'more-vertical',
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12Zm-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8Zm0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16Z" />
    </VsfIconBase>
  );
}