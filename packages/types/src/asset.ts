import type { BNInput } from 'fuels';

export type Asset = {
  name?: string;
  assetId: string;
  imageUrl?: string;
  symbol?: string;
  isCustom?: boolean;
};

export type AssetAmount = Asset & {
  amount?: BNInput;
};
