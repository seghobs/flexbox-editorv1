export type SizeUnit = 'px' | '%' | 'em' | 'rem' | 'vw' | 'vh';

export interface BoxSize {
  value: number;
  unit: SizeUnit;
}

export interface BoxContent {
  type: 'text' | 'image' | 'icon';
  content: string;
}

export interface FlexProps {
  direction: string;
  justify: string;
  align: string;
  wrap: string;
  gap: BoxSize;
}