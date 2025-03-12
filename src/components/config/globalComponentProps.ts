type SpacingType = 'padding' | 'margin';
type Direction = 'top' | 'bottom' | 'left' | 'right' | 'all';
type Size = 'sm' | 'md' | 'lg' | 'xl';

export const globalComponentProps = (
  spacingType: SpacingType = 'padding', // Default to padding
  direction: Direction = 'all', // Default to apply to all directions
  size: Size = 'md' // Default to medium size
) => {
  const spacingClass = direction === 'all' 
    ? `${spacingType}-${size}` 
    : `${spacingType}-${direction}-${size}`;

  return { className: spacingClass };
};