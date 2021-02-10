import chunk from 'chunk';

type ColorCode = [number, number, number];

export type ColorSet = {
  text: string;
  bg: string;
  hover: string;
};

const toColorCode = (codeStr: string): ColorCode => {
  // 先頭の#をtrim
  const no = codeStr.slice(1, 7);
  return chunk(no, 2).map(([a, b]) => parseInt(a! + b!, 16)) as ColorCode;
};

export const rgb = (codes: ColorCode) => `rgb(${codes.join(',')})`;
export const rgba = (codes: ColorCode, alpha: number) =>
  `rgba(${codes.join(',')}, ${alpha})`;

const colorSet = (text: string, bg: string): ColorSet => {
  const bgRGB = toColorCode(bg);

  return Object.freeze({
    text,
    bg: rgba(bgRGB, 0.3),
    hover: rgba(bgRGB.map((c) => c - 10) as ColorCode, 0.5),
  });
};

export const Colors = {
  Success: colorSet('#7cb342', '#dcedc8'), // lightgreen(500, 100)
  Planned: colorSet('#4dd0e1', '#b2ebf2'), // cyan(300, 100)
  Running: colorSet('#26c6da', '#80deea'), // cyan(400, 200)
  Error: colorSet('#b71c1c', '#e57373'), // red(900, 300)
  GroupError: colorSet('#d32f2f', '#ffcdd2'), // red(700, 100)
  Blocked: colorSet('#757575', '#bdbdbd'), // grey(600, 400)
  Killed: colorSet('#757575', '#bdbdbd'), // grey(600, 400)
};

export const hasStatusRowStyles = (...pairs: [string, ColorSet][]) => {
  return Object.fromEntries(
    pairs.map(([status, colorSet]) => {
      return [
        `&.${status}`,
        {
          background: colorSet.bg,
          '&:hover': {
            background: colorSet.hover,
          },
        },
      ];
    }),
  );
};
