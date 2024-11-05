import getUnicodeFlagIcon from "country-flag-icons/unicode";

import { Typography } from "@strapi/design-system";
import { Globe } from "@strapi/icons";

type TProps = {
  code: string;
};

export default function CountryIcon({ code }: TProps) {
  if (!Boolean(code)) return <Globe />

  const icon = getUnicodeFlagIcon(code);

  return <Typography>{icon}</Typography>;
}
