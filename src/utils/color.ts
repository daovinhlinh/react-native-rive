export const colorWithOpacity = (color: string, opacity: number) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return color + opacityHex;
};
