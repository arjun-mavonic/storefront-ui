import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfThumbnail } from '@storefront-ui/react';

export default function ThumbnailGradient() {
  return <VsfThumbnail className="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />;
}

// #endregion source
ThumbnailGradient.getLayout = ShowcasePageLayout;
