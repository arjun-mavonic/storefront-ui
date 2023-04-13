import { ShowcasePageLayout } from '../../showcases';

// #region source
import { NavbarTop, NavbarBottom, WithAvatar as ReviewWithAvatar } from '@storefront-ui/react-blocks';

export default function CartPage() {
  return (
    <div>
      <NavbarTop />

      <ReviewWithAvatar />

      <NavbarBottom />
    </div>
  );
}

// #endregion source
CartPage.getLayout = ShowcasePageLayout;
